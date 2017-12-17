import { Component, OnInit } from '@angular/core';

import { CalendarService } from '../services/calendar.service';
import { Event } from '../services/event.model';

@Component({
  selector: 'upcoming-events',
  templateUrl:  '/app/upcoming/upcoming.component.html',
    styleUrls: ['/app/upcoming/upcoming.styles.css']
})
export class UpcomingComponent {

  constructor(private calendarService:CalendarService) { }
  
  events: Event[];

  loadEvents(){
    this.calendarService.getEvents().subscribe(
      events => this.events = events,
      err => {console.log(err);}
    );
  }

  ngOnInit(){
    this.loadEvents()
  }
}


// using structure from : https://github.com/christiannwamba/scotch-ng2-http