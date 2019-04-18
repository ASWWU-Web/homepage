import { Injectable } from '@angular/core';

import { RequestService } from 'src/shared-ng/services/services';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CalendarService {

  private calendarID = '3p9fpi388oqq94pqvm5a2nusp4@group.calendar.google.com';
  private maxResults = 10;
  private orderBy = 'startTime';
  private singleEvents = true;
  private key = 'AIzaSyDawSineZAnnuDKMQgHiaVt6KuRe4xAzAw';

  private upcomingsUrl = 'https://content.googleapis.com/calendar/v3/calendars/' + this.calendarID + '/events?' +
   'maxResults=' + this.maxResults + '&orderBy=' + this.orderBy + '&singleEvents=' + this.singleEvents + '&timeMin=' +
    this.timeMin() + '&key=' + this.key;

  constructor(private rs: RequestService) {  }

  public getUpcomings() {
    return this.rs.get(this.upcomingsUrl).toPromise();
  }

  private timeMin() {
    return new Date().toISOString();
  }
}
