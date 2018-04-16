import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { RequestService } from './RequestService/requests';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { CalendarService } from './calendar.service';
import { UserBubbleComponent } from './user-bubble/user-bubble.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    UpcomingComponent,
    UserBubbleComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  providers: [RequestService, CalendarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
