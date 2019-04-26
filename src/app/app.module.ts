import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { RequestService } from '../shared-ng/services/services';
import { HermesService } from '../shared-ng/services/services';
import { HomepageRequestService } from '../shared-ng/services/services';
import { SuperDuperService } from './services/services';
import { AppComponent } from './app.component';
import { NavBarComponent } from '../shared-ng/components/nav-bar/nav-bar.component';
import { FooterComponent } from '../shared-ng/components/footer/footer.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { CalendarService } from './services/calendar.service';
import { UserBubbleComponent } from '../shared-ng/components/user-bubble/user-bubble.component';
import { HomeComponent } from './home/home.component';
import { MobileNavComponent } from '../shared-ng/components/mobile-nav/mobile-nav.component';
import { SuperDuperComponent } from './super-duper/super-duper.component';

import { SearchComponent } from './search/search.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { PageCardComponent } from './page-card/page-card.component';
import { JobCardComponent } from './job-card/job-card.component';
import { ScrollCardsComponent } from './scroll-cards/scroll-cards.component';
import { OpenForumComponent } from './open-forum/open-forum.component';
import { SharedNgContainerComponent } from '../shared-ng/components/components';

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
    OpenForumComponent,
    SharedNgContainerComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    NgbModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [RequestService, CalendarService, SuperDuperService, HermesService, HomepageRequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
