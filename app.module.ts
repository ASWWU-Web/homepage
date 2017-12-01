import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }  from '@angular/router';
import { HttpModule }    from '@angular/http';
import { NgbModule }     from '@ng-bootstrap/ng-bootstrap';

import { AppComponent }  from './app.component';

import { ProfileComponent } from './routes/profile/profile.component'

import { HomeComponent, SearchComponent, UpdateComponent, RandomComponent, BirthdayComponent, SuperSearchComponent } from './routes/routes';

import { ProfileFullComponent, ProfileSmComponent, SearchResultsComponent, NavBarComponent, UserBubbleComponent } from './shared/shared';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {
        "path": '',
        component: SearchComponent
      },
      {
        "path": 'search/:query',
        component: SearchComponent
      },
      {
        "path":'search',
        component: SuperSearchComponent
      },
      {
        "path": 'update',
        component: UpdateComponent
      },
      {
        "path": 'profile',
        component: ProfileComponent
      },
      {
        "path": 'profile/:username',
        component: ProfileComponent
      },
      {
        "path": 'profile/:username/:year',
        component: ProfileComponent
      },
      {
        "path": 'random',
        component: RandomComponent
      },
      {
        "path": 'birthdays',
        component: BirthdayComponent
      }
    ])
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ProfileComponent,
    ProfileFullComponent,
    ProfileSmComponent,
    UpdateComponent,
    SearchResultsComponent,
    RandomComponent,
    BirthdayComponent,
    SuperSearchComponent,
    NavBarComponent,
    UserBubbleComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
