import { Component, OnInit } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  bgLink = 'https://aswwu.com/media/background.php';
  bgLinkChanged = 'url(' + this.bgLink + ')';

  constructor() { }

  ngOnInit() {
    if ( !(window.navigator.userAgent.match(/Android/i) || window.navigator.userAgent.match(/iPhone|iPad|iPod/i)) ) {
      setInterval(() => {
        this.generateNewBgLink();
      }, 10000);
    }
  }

  private generateNewBgLink() {
    const d = new Date();
    const time = d.getTime();
    this.bgLinkChanged = 'url(' + this.bgLink + '?' + time + ')';
  }
}
