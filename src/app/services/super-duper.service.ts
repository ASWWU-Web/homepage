import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/internal/Observable';
import {of, forkJoin} from 'rxjs';
import {map, catchError} from 'rxjs/operators';

import { RequestService } from '../../shared-ng/services/services';
import { CURRENT_YEAR } from '../../shared-ng/config';

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
    const inDescription = false; // item.job_description.search(query) !== -1;
    const inName = item.job_name.toLowerCase().search(query) !== -1;
    const show = visible && (inDescription || inName);
    return show;
  }

  private mapMask( response ) {
    const toReturn = response.results.slice(0, 3).map(result => {
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
    const toReturn = response.forms.filter(item => this.filterJobs(query, item)).slice(0, 3).map(result => {
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
    const toReturn = response.results.slice(0, 3).map(result => {
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
    const maskObservable = this.requests.get( this.maskUri + queryUri ).pipe(
      map(response => this.mapMask(response)),
      catchError(err => of([]))
      );
    const pagesObservable = this.requests.get( this.pagesUri + queryUri ).pipe(
      map(response => this.mapPages(response)),
      catchError(err => of([]))
      );
    const jobsObservable = this.requests.get( this.jobsUri ).pipe(
      map(response => this.mapJobs(query, response)),
      catchError(err => of([]))
      ); // don't parseQuery()
    // uses: https://stackoverflow.com/questions/44141569/how-to-concat-two-observable-arrays-into-a-single-array
    const toReturn = forkJoin(maskObservable, pagesObservable, jobsObservable).pipe(
      map(([s1, s2, s3]) => {
      return [...s1, ...s2, ...s3];
      })
    );
    return toReturn;
  }

  SearchAndReturnObservableResults(query) {
    const queryUri = this.parseQuery(query);
    const maskObservable = this.requests.get( this.maskUri + queryUri ).pipe(
      map(response => response.results),
      catchError(err => of([]))
      );
    const pagesObservable = this.requests.get( this.pagesUri + queryUri ).pipe(
      map(response => response.results),
      catchError(err => of([]))
      );
    const jobsObservable = this.requests.get( this.jobsUri ).pipe(
      map(response => response.forms.filter(result => this.filterJobs(query, result))),
      catchError(err => of([]))
      ); // don't parseQuery()
    // let jobsObservable = this.requests.getObservable( this.jobsUri ).map(response => this.mapJobs(query, response)).catch(err => of([])); // don't parseQuery()

    // uses: https://stackoverflow.com/questions/44141569/how-to-concat-two-observable-arrays-into-a-single-array
    const toReturn = forkJoin(maskObservable, pagesObservable, jobsObservable);
    return toReturn;
  }


}
