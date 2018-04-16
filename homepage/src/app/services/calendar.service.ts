import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { UpcomingModel } from '../upcoming/upcoming.model';

@Injectable()
export class CalendarService {

  private calendarID = '3p9fpi388oqq94pqvm5a2nusp4@group.calendar.google.com';
  private maxResults = 10;
  private orderBy = 'startTime';
  private singleEvents = true;
  private key = 'AIzaSyDawSineZAnnuDKMQgHiaVt6KuRe4xAzAw';

  private upcomingsUrl = 'https://content.googleapis.com/calendar/v3/calendars/' + this.calendarID + '/events?' + 'maxResults=' + this.maxResults + '&orderBy=' + this.orderBy + '&singleEvents=' + this.singleEvents + '&timeMin=' + this.timeMin() + '&key=' + this.key;

  constructor(private http: Http) {  }

  public getUpcomings() {
    return this.http.get(this.upcomingsUrl).toPromise();
  }

  private timeMin() {
    return new Date().toISOString();
  }
}
