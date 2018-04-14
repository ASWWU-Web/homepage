import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { CalendarService } from './calendar.service';
import { UserBubbleComponent } from './user-bubble/user-bubble.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    UpcomingComponent,
    UserBubbleComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  providers: [CalendarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
