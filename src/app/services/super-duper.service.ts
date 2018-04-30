import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {map} from 'rxjs/operators';

import { RequestService } from './request.service';
import { CURRENT_YEAR } from '../config';
import { concat } from 'rxjs/operators/concat';
import 'rxjs/add/observable/forkJoin';

@Injectable()
export class SuperDuperService {

  jobsUri = '/forms/job/view/all';
  maskUri = 'search/' + CURRENT_YEAR + '/';
  pagesUri = '/pages/search?general=';

  jobLink = 'https://aswwu.com/jobs/submit/';
  maskLink = 'https://aswwu.com/mask/profile/';
  pageLink = 'https://aswwu.com/pages/';

  constructor(private requests: RequestService) { }

  private parseQuery(query: string): string {
    // TODO: switch regex with the method used in pages search component
    query = query.toLowerCase().replace(/[!@#$%^&*()=+]/g, '').replace(/[_ -]/g, '%20');
    return query;
  }

  private filterJobs(query, item) {
    query = query.toLowerCase();
    const visible = item.visibility;
    const inDescription = false;//item.job_description.search(query) !== -1;
    const inName = item.job_name.search(query) !== -1;
    const show = visible && (inDescription || inName);
    return show;
  }

  private mapMask( response ) {
    let toReturn = response.results.slice(0, 3).map(result => {
      return {
        'main': result.full_name,
        'sub': '', // we could add a sub text for each result, like major for mask results
        'source': 'Mask',
        'link': this.maskLink + result.username,
        'top': false,
      };
    });
    toReturn[0].top = true;
    return toReturn;
  }

  private mapJobs( query, response ) {
    let toReturn = response.forms.filter(item => this.filterJobs(query, item)).slice(0, 3).map(result => {
      return {
        'main': result.job_name,
        'sub': '',
        'source': 'Jobs',
        'link': this.jobLink + result.jobID,
        'top': false,
      };
    });
    toReturn[0].top = true;
    return toReturn;
  }

  private mapPages( response ) {
    let toReturn = response.results.slice(0, 3).map(result => {
      return {
        'main': result.title,
        'sub': '',
        'source': 'Pages',
        'link': this.pageLink + result.url,
        'top': false,
      };
    });
    toReturn[0].top = true;
    return toReturn;
  }

  SearchAndReturnObservableArray(query) {
    const queryUri = this.parseQuery(query);
    let maskObservable = this.requests.getObservable( this.maskUri + queryUri ).map(response => this.mapMask(response)).catch(err => of([]));
    let pagesObservable = this.requests.getObservable( this.pagesUri ).map(response => this.mapPages(response)).catch(err => of([]));
    let jobsObservable = this.requests.getObservable( this.jobsUri ).map(response => this.mapJobs(query, response)).catch(err => of([])); // don't parseQuery()
    // uses: https://stackoverflow.com/questions/44141569/how-to-concat-two-observable-arrays-into-a-single-array
    let toReturn = Observable.forkJoin(maskObservable, pagesObservable, jobsObservable).map(([s1, s2, s3]) => {
      return [...s1, ...s2, ...s3];
    });
    return toReturn;
  }

  SearchAndReturnObservableResults(query) {
    const queryUri = this.parseQuery(query);
    let maskObservable = this.requests.getObservable( this.maskUri + queryUri ).map(response => response.results).catch(err => of([]));
    let pagesObservable = this.requests.getObservable( this.pagesUri ).map(response => response.results).catch(err => of([]));
    let jobsObservable = this.requests.getObservable( this.jobsUri ).map(response => response.results.filter(result => this.filterJobs(query, result))).catch(err => of([])); // don't parseQuery()
    // uses: https://stackoverflow.com/questions/44141569/how-to-concat-two-observable-arrays-into-a-single-array
    let toReturn = Observable.forkJoin(maskObservable, pagesObservable, jobsObservable);
    return toReturn;
  }


}
