import { Component, OnInit } from '@angular/core';
import { CalendarService } from '../services/calendar.service';

@Component({
  selector: 'upcoming-events',
  templateUrl:  '/app/upcoming/upcoming.component.html',
    styleUrls: ['/app/upcoming/upcoming.styles.css']
})

export class UpcomingComponent {

  results:any;

  constructor(private calendarService:CalendarService) { 
    calendarService.getUpcomings().then(res => this.results = res.json().items);
  };
}
