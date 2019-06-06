import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

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
import { HeaderComponent } from '../shared-ng/components/header/header.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { CalendarService } from './services/calendar.service';
import { UserBubbleComponent } from '../shared-ng/components/user-bubble/user-bubble.component';
import { HomeComponent } from './home/home.component';
import { SuperDuperComponent } from './super-duper/super-duper.component';

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
    FooterComponent,
    HeaderComponent,
    UpcomingComponent,
    UserBubbleComponent,
    HomeComponent,
    SuperDuperComponent,
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
    ReactiveFormsModule,
    NgbModule,
    AppRoutingModule,
    FontAwesomeModule,
  ],
  providers: [RequestService, CalendarService, SuperDuperService, HermesService, HomepageRequestService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    library.add(faSearch);
  }
}
