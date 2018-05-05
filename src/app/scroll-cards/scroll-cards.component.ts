import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'scroll-cards',
  templateUrl: './scroll-cards.component.html',
  styleUrls: ['./scroll-cards.component.css']
})

export class ScrollCardsComponent {
  @Input() profileData: any = [];
  @Input() pageData: any = [];
  @Input() jobData: any = [];
  @Input() showMeta: boolean = false;
  @Input() sort: boolean = false;
  uniqueID: string = Math.random().toString(36).substr(2, 9);

  ngOnChanges() {
    // sort page data based on title
    // TODO: choose sort key
    if (this.profileData != null && this.sort) {
      this.profileData = this.profileData.sort((a, b) => {
        if(a['title'] < b['title']) return -1;
        if(a['title'] > b['title']) return 1;
        return 0;
      });
    }
    else if (this.pageData != null && this.sort) {
      this.pageData = this.pageData.sort((a, b) => {
        if(a['title'] < b['title']) return -1;
        if(a['title'] > b['title']) return 1;
        return 0;
      });
    }
    // TODO: choose sort key
    else if (this.pageData != null && this.sort) {
      this.pageData = this.pageData.sort((a, b) => {
        if(a['title'] < b['title']) return -1;
        if(a['title'] > b['title']) return 1;
        return 0;
      });
    }
  }

  scroll(negative) {
    // only scroll one card if on mobile
    let scrollNum = 2;
    if (window.innerWidth < 768) {
      scrollNum = 1;
    }
    // get card widths
    let cardWidth = 0;
    try {
      cardWidth = document.getElementById('0-' + this.uniqueID).offsetWidth;
    } catch(err) {
      return
    }
    let scroller = document.getElementById('scrolling-wrapper-' + this.uniqueID)
    let scrollVal = 0
    // jump to assumed card
    if (!negative) {
      if (scroller.scrollLeft % cardWidth < cardWidth / 2) {
        scrollVal += cardWidth * scrollNum;
      } else {
        scrollVal += cardWidth * (scrollNum + 1);
      }
    } else {
      if (scroller.scrollLeft % cardWidth < cardWidth / 2) {
        scrollVal -= cardWidth * scrollNum;
      } else {
        scrollVal -= cardWidth * (scrollNum - 1);
      }
    }
    scrollVal -= (scroller.scrollLeft % cardWidth);
    scroller.scrollBy({left: scrollVal, behavior: 'smooth'})
  }
}
