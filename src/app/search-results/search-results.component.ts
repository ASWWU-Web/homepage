import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent {
  @Input() profileData: any = {
    "results": [
      {
          "username": "Maxwell.Boonstra",
          "photo": "profiles/1718/00108-2051490.jpg",
          "email": "",
          "full_name": "Maxwell Boonstra",
          "views": 23
      },
      {
          "username": "sheldon.maxwell",
          "photo": "images/mask_unknown.png",
          "email": "",
          "full_name": "Sheldon Maxwell",
          "views": 11
      },
      {
          "username": "Stacy.Maxted",
          "photo": "profiles/1718/02024-1450245.jpg",
          "email": "stacy.maxted@wallawalla.edu",
          "full_name": "Stacy Maxted",
          "views": 10
      },
      {
          "username": "Jesse.Maxwell",
          "photo": "None",
          "email": "None",
          "full_name": "Jesse Maxwell",
          "views": 4
      }
    ]
  };
  @Input() pageData: any = {
    "results": [
        {
            "description": "Wow, look at this new lorem ipsum page!",
            "tags": [],
            "visible": true,
            "owner": "sheldon.woodward",
            "cover_image": null,
            "category": "Event",
            "title": "test",
            "url": "new",
            "author": "ryan.rabello",
            "created": "2018-04-03T09:46:39.411560",
            "department": "test"
        },
        {
            "description": "Wow, look at this new lorem ipsum page!",
            "tags": [],
            "visible": true,
            "owner": "sheldon.woodward",
            "cover_image": null,
            "category": "Event",
            "title": "test",
            "url": "new2",
            "author": "ryan.rabello",
            "created": "2018-04-03T11:25:11.206074",
            "department": "test"
        }
    ]
  }
}
