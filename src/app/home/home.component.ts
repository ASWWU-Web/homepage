import { Component, OnInit } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  bgLink = 'https://aswwu.com/media/images/background/background.jpg';
  bgLinkChanged = 'url(' + this.bgLink + ')';

  constructor() { }

  ngOnInit() {
  }
}
