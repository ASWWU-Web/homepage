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

  constructor(private calendarService:CalendarService) {
    this.ready = false;
    this.upcomings = new Array<Upcomings>();
    calendarService.getUpcomings().then(res => {
      this.results = res.json().items;
      for (const key in this.results) {
        if (this.results.hasOwnProperty(key)) {
          if (this.results[key].summary.slice(0,5) === "ASWWU"){ 
            this.upcomings.push(new Upcomings(this.results[key].summary));
          }
        }
      }
      console.log(this.upcomings[0].summary);
      this.ready = true;
    });
  };
}
