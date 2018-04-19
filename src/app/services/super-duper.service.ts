import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';

import { RequestService } from './request.service';
// import CURRENT_YEAR

@Injectable()
export class SuperDuperService {

  jobsUri = '/server/forms/job/view/all';
  maskUri = '/server/search/1718/far';
  pagesUri = '/pages/search?general=';

  constructor(private requests: RequestService) { }

  parseQuery(query: string): string {
    // TODO: switch regex with the method used in pages search component
    query = query.toLowerCase().replace(/[!@#$%^&*()=+]/g, '').replace(/[_ -]/g, '%20');
    return query;
  }

  search(query: string) {
    const queryUri = this.parseQuery(query);
    let jobsResults: any;
    let maskResults: any;
    let pagesResults: any;
    this.requests.get((this.jobsUri + queryUri), (data) => jobsResults = data, null);
    this.requests.get((this.maskUri + queryUri), (data) => maskResults = data, null);
    this.requests.get((this.pagesUri + queryUri), (data) => pagesResults = data, null);
    return of({
      'jobs': jobsResults,
      'mask': maskResults,
      'pages': pagesResults
    });
  }

  searchArray(query: string) {
    if (query === '') {
      return of([]);
    }
    // WIP: this takes an observable from search and maps the results to an observable array which will later be handled by the typeahead
    let resultsObservable = this.search(query);
    let results.do( (info) => {
      let resultsArray = 0;
    });
  }

}
