import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Event } from './event.model';

@Injectable()
export class CalendarService {

  constructor(private http: Http) { }

  private eventsUrl = 'https://content.googleapis.com/calendar/v3/calendars/3p9fpi388oqq94pqvm5a2nusp4%40group.calendar.google.com/events?maxResults=10&orderBy=startTime&singleEvents=true&key=AIzaSyDawSineZAnnuDKMQgHiaVt6KuRe4xAzAw';

  getEvents() : Observable<Event[]> {
    return this.http.get(this.eventsUrl)
                    .map(res => res.json())
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }


  
}

// part of the future get request:
// # include timeMin " Must be an RFC3339 timestamp with mandatory time zone offset, e.g., 2011-06-03T10:00:00-07:00, 2011-06-03T10:00:00Z. "
// GET https://content.googleapis.com/calendar/v3/calendars/3p9fpi388oqq94pqvm5a2nusp4%40group.calendar.google.com/events?maxResults=10&orderBy=startTime&singleEvents=true&key=AIzaSyDawSineZAnnuDKMQgHiaVt6KuRe4xAzAw

// using structure from : https://github.com/christiannwamba/scotch-ng2-http