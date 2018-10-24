import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'open-forum',
  templateUrl: './open-forum.component.html',
  styleUrls: ['./open-forum.component.css']
})
export class OpenForumComponent implements OnInit {

  constructor() { }

  officers = [
    'President',
    'Vice President',
    'Treasurer',
    'Social VP',
    'Spiritual VP'
  ];

  selectedOfficer = '';

  ngOnInit() {
  }

}
