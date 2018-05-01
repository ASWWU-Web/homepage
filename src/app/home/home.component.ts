import { Component, OnInit } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  bgLink = 'https://aswwu.com/media/background.php';
  bgLinkChanged = 'url(' + this.bgLink + ')';
  // bgLinkChanged = this.bgLink;

  constructor() { }

  ngOnInit() {
    setInterval(() => {
      this.generateNewBgLink();
    }, 10000);
  }

  private generateNewBgLink() {
    const d = new Date();
    const time = d.getTime();
    this.bgLinkChanged = 'url(../../assets/blank.png)';
    setTimeout(() => {
      this.bgLinkChanged = 'url(' + this.bgLink + '?' + time + ')';
    }, 2000);
  }
}
