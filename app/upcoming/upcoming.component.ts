import { Component } from '@angular/core';
import { CalendarService } from '../services/calendar.service';
import { Upcomings } from './upcoming.model';

@Component({
  selector: 'upcoming-events',
  templateUrl:  '/app/upcoming/upcoming.component.html',
    styleUrls: ['/app/upcoming/upcoming.styles.css']
})

export class UpcomingComponent {

  results:any;
  upcomings:Upcomings[];
  ready:boolean

  // TODO: 
  // • jump out of for loop when upcomings array has 5 elements to keep it from getting huge
  // • make events clickable with htmlLink member of upcomings
  // • add "more" button to load more events
  // • add pop-up or something similar for events so there can be a place for the "description"
  // • use date object for all dates/dateTimes in order to display the day of the week

  constructor(private calendarService:CalendarService) {
    this.ready = false;
    this.upcomings = new Array<Upcomings>();
    calendarService.getUpcomings().then(res => {
      this.results = res.json().items;
      for (const key in this.results) {
        if (this.results.hasOwnProperty(key)) {
          if (this.results[key].summary.slice(0,5) === "ASWWU"){ 
            this.upcomings.push(new Upcomings(this.results[key].summary, this.results[key].start));
          }
        }
      }
      this.ready = true;
    });
  };
}
