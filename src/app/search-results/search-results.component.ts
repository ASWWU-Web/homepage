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
  };
  @Input() jobData: any = {
    "forms": [
      {
          "image": "",
          "visibility": false,
          "jobID": 1,
          "job_description": "Doesn't Really matter",
          "department": "",
          "job_name": "ASWWU Generic"
      },
      {
          "image": "",
          "visibility": false,
          "jobID": 4,
          "job_description": "A competent organizer and administrative assistant ready to help where help is needed. \n\nResponsibilities:\n-Facilitate the aswwu@wallawalla.edu email\n-Maintain scheduling functions\n-Compile meeting agendas\n-Keeping the ASWWU calendar updated\n-Making sure ASWWU.com is up-to-date\n\n*Cabinet Position",
          "department": "Executive",
          "job_name": "Executive Secretary"
      },
      {
          "image": "",
          "visibility": false,
          "jobID": 5,
          "job_description": "An individual who works closely with the EVP to prepare for Senate meetings and assists with other necessary tasks.",
          "department": "Executive",
          "job_name": "Executive Assistant"
      },
      {
          "image": "",
          "visibility": false,
          "jobID": 6,
          "job_description": "An individual who records minutes during Senate meetings, taking care to capture all the important details of the meeting in their notes. \nOnce organized, the Senate Secretary shares the minutes with the Senators before their next meeting.\n\nResponsibilities:\n-Take Minutes\n-Organize Them\n-Communicate with the EVP\n-Attend Senate Each Week\n\nNecessary Skills:\n-Rapid Typing",
          "department": "Senate",
          "job_name": "Senate Secretary"
      },
    ]
  };
}
