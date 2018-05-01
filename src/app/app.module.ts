import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { RequestService, SuperDuperService } from './services/services';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { CalendarService } from './services/calendar.service';
import { UserBubbleComponent } from './user-bubble/user-bubble.component';
import { HomeComponent } from './home/home.component';
import { MobileNavComponent } from './mobile-nav/mobile-nav.component';
import { SuperDuperComponent } from './super-duper/super-duper.component';

import { SearchResultsComponent } from './search-results/search-results.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { PageCardComponent } from './page-card/page-card.component';
import { JobCardComponent } from './job-card/job-card.component';
import { ScrollCardsComponent } from './scroll-cards/scroll-cards.component'

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MobileNavComponent,
    FooterComponent,
    UpcomingComponent,
    UserBubbleComponent,
    HomeComponent,
    SuperDuperComponent,
    SearchResultsComponent,
    ProfileCardComponent,
    PageCardComponent,
    JobCardComponent,
    ScrollCardsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {
        'path': 'search/:query',
        component: SearchResultsComponent
      },
      {
        'path': 'search',
        component: SearchResultsComponent
      },
      {
        'path': '',
        component: HomeComponent
      }
    ])
  ],
  providers: [RequestService, CalendarService, SuperDuperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
