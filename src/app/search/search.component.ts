import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/do';

import { SuperDuperService } from '../services/super-duper.service';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  profileData: any = [];
  pageData: any = [];
  jobData: any = [];
  parameterSearch: string;
  resultsReady = 0;

  constructor(private route: ActivatedRoute, private searchService: SuperDuperService) {
  }

  ngOnInit() {
    const sub = this.route.params.subscribe(params => {
      this.resultsReady = 1;
      this.parameterSearch = params['query'];
      this.searchService.SearchAndReturnObservableResults(this.parameterSearch).do(([mask, pages, jobs]) => {
        this.profileData = mask;
        this.jobData = jobs;
        this.pageData = pages;
        this.resultsReady = 2;
      }).subscribe();
    });
  }
}
