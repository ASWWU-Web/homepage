import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HttpModule } from '@angular/http'
import { HttpClientModule } from '@angular/common/http'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { RequestService } from './RequestService/requests';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { CalendarService } from './services/calendar.service';
import { UserBubbleComponent } from './user-bubble/user-bubble.component';
import { HomeComponent } from './home/home.component';
import { MobileNavComponent } from './mobile-nav/mobile-nav.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MobileNavComponent,
    FooterComponent,
    UpcomingComponent,
    UserBubbleComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {
        'path': '',
        component: HomeComponent
      }
    ])
  ],
  providers: [RequestService, CalendarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
