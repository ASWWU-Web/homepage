import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/merge';

import { SuperDuperService } from '../services/services';

@Component({
  selector: 'app-super-duper',
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
    text$
      .debounceTime(300)
      .distinctUntilChanged()
      .do(() => this.searching = true)
      .switchMap(term =>
        this._service.SearchAndReturnObservableArray(term)
          .do(() => this.searchFailed = false)
          .catch(() => {
            this.searchFailed = true;
            return of([]);
          }))
      .do(() => this.searching = false)
      .merge(this.hideSearchingWhenUnsubscribed);

  formatter = (x: {main: string}) => x.main;

  maskSearch(userInput: string) {
    // re-navigate with a parameter
    this.router.navigate([this.searchPageroute, userInput]);
  }

  goToResult(resultLink) {
    // todo follow the link
  }

}

