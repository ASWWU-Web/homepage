import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/internal/Observable';
import { of, merge } from 'rxjs';
import { debounceTime, distinctUntilChanged, tap, catchError, switchMap, map } from 'rxjs/operators';
import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap';

import { HomepageRequestService } from '../../shared-ng/services/services';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'super-duper',
  templateUrl: './super-duper.component.html',
  styleUrls: ['./super-duper.component.css']
})
export class SuperDuperComponent implements OnInit {

  @Input() model: string = null;
  searching = false;
  searchFailed = false;
  hideSearchingWhenUnsubscribed = new Observable(() => () => this.searching = false);

  // dropdown menu options
  sites: string[] = ['Mask', /*'Pages', 'Jobs'*/];
  // placeholder options
  placeholders: string[] = ['search the mask...', /*'search pages...', 'search jobs...'*/];
  // default placeholder
  placeHolder: string = 'search the mask...';
  // default dropdown option
  selectSites: string = 'Mask';

  searchPageroute = 'search';

  // new page routes
  maskPageRoute = 'mask?query=';
  pagesPageRoute = 'pages?query=';
  jobsPageRoute = 'jobs?query=';
  formGroup: FormGroup;

  constructor(private hprs: HomepageRequestService, private router: Router) {
    this.formGroup = new FormGroup({name: new FormControl('')});
  }

  ngOnInit() {}

  getNames(query: string) {
    if (query === '') {
      return of({results: []});
    }
    return this.hprs.get('search/names', {full_name: query});
  }

  search = (text$: Observable<string>) => {
    return text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((data) => this.getNames(data)),
      map((data: {results: {username: string, full_name: string}[]}) => {
        return data.results;
      })
    );
  }

  formatter = (x: {username: string, full_name: string}) => x.full_name;

  // allows dropdown menu button to change based on user selection
  ChangeSite(newSite: string) {
    this.selectSites = newSite;
    if (newSite === 'Mask') {
      this.placeHolder = this.placeholders[0];
    } else if (newSite === 'Pages') {
      this.placeHolder = this.placeholders[1];
    } else if (newSite === 'Jobs') {
      this.placeHolder = this.placeholders[2];
    }
  }

  // new search function
  superSearch(userinput: string) {
    if (userinput === undefined) {
      userinput = this.formGroup.value.name;
    }
    if (this.selectSites === 'Mask') {
      window.location.href = this.maskPageRoute + userinput;
    }
    /* Not implemented yet
    else if (this.selectSites === 'Pages') {
      window.location.href = this.pagesPageRoute + userInput;
    } else if (this.selectSites === 'Jobs') {
      window.location.href = this.jobsPageRoute + userInput;
    }*/
  }

}

