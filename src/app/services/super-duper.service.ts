import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {map} from 'rxjs/operators';

import { RequestService } from './request.service';
// import CURRENT_YEAR

@Injectable()
export class SuperDuperService {

  jobsUri = '/server/forms/job/view/all';
  maskUri = 'search/1718/';
  pagesUri = '/pages/search?general=';

  jobLink = 'https://aswwu.com/jobs/submit/';
  maskLink = '';
  pageLink = '';

  constructor(private requests: RequestService) { }

  parseQuery(query: string): string {
    // TODO: switch regex with the method used in pages search component
    query = query.toLowerCase().replace(/[!@#$%^&*()=+]/g, '').replace(/[_ -]/g, '%20');
    return query;
  }

  // jobsFilter(jobs) {

  // }

  // search(query: string) {
  //   const queryUri = this.parseQuery(query);
  //   let jobsResults: any;
  //   let maskResults: any;
  //   let pagesResults: any;
  //   this.requests.get((this.jobsUri + queryUri), (data) => jobsResults = this.jobsFilter(data.forms), null);
  //   this.requests.get((this.maskUri + queryUri), (data) => maskResults = data.results, null);
  //   this.requests.get((this.pagesUri + queryUri), (data) => pagesResults = data, null);
  //   return of({
  //     'jobs': jobsResults,
  //     'mask': maskResults,
  //     'pages': pagesResults
  //   });
  // }

  // searchArray(query: string) {
  //   let rl = of([]);
  //   if (query === '') {
  //     return of([]);
  //   } else {
  //     this.search(query).do( (data) => {
  //       const jobsMap = data.jobs.map( (job) => { return {'result': job.job_name,
  //                                                         'sub': 'ASWWU Jobs',
  //                                                         'link': this.jobLink + job.jobID}; });
  //       const maskMap = data.mask.map( (profile) => { return {'result': profile.full_name,
  //                                                             'sub': 'Mask',
  //                                                             'link': this.maskLink}; });
  //       const pagesMap = data.mask.map( (page) => { return {'result': page.,
  //                                                              'sub': 'Mask',
  //                                                              'link': this.maskLink}; });
  //         rl = of(
  //         {
  //           'jobs': jobsMap,
  //           'mask': maskMap,
  //           'pages': pagesMap
  //         });
  //     });
  //     return resultList;
  //   }
  //   // WIP: this takes an observable from search and maps the results to an observable array which will later be handled by the typeahead
  //   // const resultsObservable = this.search(query);
  //   // const results.do( (info) => {
  //   //   let resultsArray = 0;
  // }

  SearchAndReturnObservableArray(query) {
    const queryUri = this.parseQuery(query);
    return this.requests.getObservable( this.maskUri + queryUri ).map(response => response.results);//.map(data=>data.map(data=>data.full_name));
  }



}
