import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    'path': 'search/:query',
    component: SearchComponent
  },
  {
    'path': 'search',
    component: SearchComponent
  },
  {
    'path': '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
