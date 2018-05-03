import { Injectable } from '@angular/core';

import { RequestService } from './request.service';
// import CURRENT_YEAR

@Injectable()
export class SuperDuperService {

  jobsUri = '/server/forms/job/view/all';
  maskUri = '/server/search/1718/far';
  pagesUri = '/pages/search?general=';

  constructor(private requests: RequestService) { }

  parseQuery(query: string): string {
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
    return {
      'jobs': jobsResults,
      'mask': maskResults,
      'pages': pagesResults
    };
  }

}
