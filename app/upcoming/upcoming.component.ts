import { Component } from '@angular/core';
import { CalendarService } from '../services/calendar.service';

@Component({
  selector: 'upcoming-events',
  templateUrl:  '/app/upcoming/upcoming.component.html',
    styleUrls: ['/app/upcoming/upcoming.styles.css']
})
export class UpcomingComponent {

  // constructor(private calendarService:CalendarService) { }
  
  // summary = this.calendarService.getCalJSON()
  //   .subscribe(result => {
  //     this.result = result.items.summary
  //   });

}

// part of the future get request:
// # include timeMin " Must be an RFC3339 timestamp with mandatory time zone offset, e.g., 2011-06-03T10:00:00-07:00, 2011-06-03T10:00:00Z. "
// GET https://content.googleapis.com/calendar/v3/calendars/3p9fpi388oqq94pqvm5a2nusp4%40group.calendar.google.com/events?maxResults=10&orderBy=startTime&singleEvents=true&key=AIzaSyDawSineZAnnuDKMQgHiaVt6KuRe4xAzAw