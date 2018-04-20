import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HttpModule } from '@angular/http'
import { HttpClientModule } from '@angular/common/http'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { RequestService } from './services/services';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { CalendarService } from './services/calendar.service';
import { UserBubbleComponent } from './user-bubble/user-bubble.component';
import { HomeComponent } from './home/home.component';
import { MobileNavComponent } from './mobile-nav/mobile-nav.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { PageCardComponent } from './page-card/page-card.component';
import { JobCardComponent } from './job-card/job-card.component'

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MobileNavComponent,
    FooterComponent,
    UpcomingComponent,
    UserBubbleComponent,
    HomeComponent,
    SearchResultsComponent,
    ProfileCardComponent,
    PageCardComponent,
    JobCardComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {
        'path': 'test',
        component: SearchResultsComponent
      },
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
