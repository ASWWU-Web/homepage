import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/internal/Observable';
import { of, merge } from 'rxjs';
import { debounceTime, distinctUntilChanged, tap, catchError, switchMap } from 'rxjs/operators';
import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap';

import { SuperDuperService } from '../services/services';

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
  sites: string[] = ['Mask', 'Pages', 'Jobs'];
  // placeholder options
  placeholders: string[] = ['search the mask...', 'search pages...', 'search jobs...'];
  // default placeholder
  placeHolder: string = 'search the mask...';
  // default dropdown option
  selectSites: string = 'Mask';

  searchPageroute = 'search';

  // new page routes
  maskPageRoute = 'mask?query=';
  pagesPageRoute = 'pages?query=';
  jobsPageRoute = 'jobs?query=';

  constructor(private _service: SuperDuperService, private router: Router) { }

  ngOnInit() {}

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => this.searching = true),
      switchMap((term) => this._service.SearchAndReturnObservableArray(term)),
      tap(() => this.searchFailed = false),
      catchError(() => {
        this.searchFailed = true;
        return of([]);
      }),
      tap(() => this.searching = false),
      // merge(this.hideSearchingWhenUnsubscribed)
    )

  formatter = (x: {main: string}) => x.main;

  maskSearch(userInput: string) {
    // re-navigate with a parameter
    this.router.navigate([this.searchPageroute, userInput]);
  }

  goToResult(resultLink) {
    window.location.href = resultLink;
  }

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
  superSearch(userInput: string) {
    if (this.selectSites === 'Mask') {
      window.location.href = this.maskPageRoute + userInput;
    } else if (this.selectSites === 'Pages') {
      window.location.href = this.pagesPageRoute + userInput;
    } else if (this.selectSites === 'Jobs') {
      window.location.href = this.jobsPageRoute + userInput;
    }
  }

}

