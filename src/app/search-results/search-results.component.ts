import { Component, OnInit, Input } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/do';

import { SuperDuperService } from '../services/services';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  @Input() profileData: any;
  @Input() pageData: any;
  @Input() jobData: any;

  parameterSearch: string;
  resultsReady = false;

  constructor(private route: ActivatedRoute, private searchService: SuperDuperService) {
  }

  ngOnInit() {
    const sub = this.route.params.subscribe(params => {
        this.parameterSearch = params['query'];
        this.searchService.SearchAndReturnObservableResults(this.parameterSearch).do(([mask, pages, jobs]) => {
            this.profileData = mask;
            this.jobData = jobs;
            this.pageData = pages;
            this.resultsReady = true;
        }).subscribe();
    });
  }
}
