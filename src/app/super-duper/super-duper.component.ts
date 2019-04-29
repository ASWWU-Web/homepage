import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/internal/Observable';
import { of, merge } from 'rxjs';
import { debounceTime, distinctUntilChanged, tap, catchError, switchMap } from 'rxjs/operators';

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

  searchPageroute = 'search';

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

}

