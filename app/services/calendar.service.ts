import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Upcomings } from '../upcoming/upcoming.model';

@Injectable()
export class CalendarService {

  private upcomingsUrl = 'https://content.googleapis.com/calendar/v3/calendars/3p9fpi388oqq94pqvm5a2nusp4%40group.calendar.google.com/events?maxResults=10&orderBy=startTime&singleEvents=true&key=AIzaSyDawSineZAnnuDKMQgHiaVt6KuRe4xAzAw';

  constructor(private http: Http) {  }

  getUpcomings() {
    return this.http.get(this.upcomingsUrl).toPromise();
  }
}

// part of the future get request:
// # include timeMin " Must be an RFC3339 timestamp with mandatory time zone offset, e.g., 2011-06-03T10:00:00-07:00, 2011-06-03T10:00:00Z. "
// GET https://content.googleapis.com/calendar/v3/calendars/3p9fpi388oqq94pqvm5a2nusp4%40group.calendar.google.com/events?maxResults=10&orderBy=startTime&singleEvents=true&key=AIzaSyDawSineZAnnuDKMQgHiaVt6KuRe4xAzAw
