import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { NgbModule }     from '@ng-bootstrap/ng-bootstrap';

import { AppComponent }  from './app.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { CalendarService } from './services/calendar.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    NgbModule.forRoot(),
  ],
  providers: [ CalendarService ],
  declarations: [ AppComponent, UpcomingComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }