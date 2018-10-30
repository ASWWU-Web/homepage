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

import { SearchComponent } from './search/search.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { PageCardComponent } from './page-card/page-card.component';
import { JobCardComponent } from './job-card/job-card.component';
import { ScrollCardsComponent } from './scroll-cards/scroll-cards.component';
import { SenateElectionComponent } from './senate-election/senate-election.component';
import { ElectionsAdminComponent } from './elections-admin/elections-admin.component';
import { OpenForumComponent } from './open-forum/open-forum.component'

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
    SearchComponent,
    ProfileCardComponent,
    PageCardComponent,
    JobCardComponent,
    ScrollCardsComponent,
    SenateElectionComponent,
    ElectionsAdminComponent,
    OpenForumComponent
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
        component: SearchComponent
      },
      {
        'path': 'search',
        component: SearchComponent
      },
      {
        'path': 'senate-election/admin',
        component: ElectionsAdminComponent
      },
      {
        'path': 'senate-election',
        component: SenateElectionComponent
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
