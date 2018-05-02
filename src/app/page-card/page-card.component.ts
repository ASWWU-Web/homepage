import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestService } from '../services/request.service';
import { MEDIA_SM, DEFAULT_PHOTO, CURRENT_YEAR } from '../config';
import { resolveCoverImage } from '../resolveCoverImage';

@Component({
  selector: 'page-card',
  templateUrl: './page-card.component.html',
  styleUrls: ['./page-card.component.css']
})

export class PageCardComponent implements OnInit {
  @Input() page: any;
  @Input() showMeta: boolean = false;
  profile: any;
  router: any;
  public getCoverImage: any = resolveCoverImage;

  constructor(private requestService: RequestService, private _router: Router) {
      this.router = _router;
  }

  ngOnInit() {
    if (this.showMeta) {
      this.requestService.get('/profile/' + CURRENT_YEAR + '/' + this.page['author'], (data) => {
        this.profile = data;
      }, null);
    }
  }

  //Photourl to link function returns proper url and BLANK photo if photo == "None"
  getPhotoLink(url: string) {
    if(url && url != "None") {
        return MEDIA_SM + "/" + url;
    } else {
        return MEDIA_SM + "/" + DEFAULT_PHOTO;
    }
  }

  getAuthor() {
    try {
      if (this.profile['full_name'] != null) {
        return this.profile['full_name']
      } else {
        let author = this.page['author'].replace(/\./gi, ' ');
        // https://stackoverflow.com/questions/4878756/how-to-capitalize-first-letter-of-each-word-like-a-2-word-city
        return author.replace(/\w\S*/g, function(txt) {
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
      }
    } catch(err) {
      return ""
    }
  }

  authorProfile() {
    return 'https://aswwu.com/#/profile/' + this.page['author']
  }

  getDateCreated() {
    let date = new Date(this.page['created']);
    return date.toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  }

  navigate(url) {
    // wait to navigate if author link was clicked
    setTimeout(()=>{this.router.navigate(['/' + url]);}, 150);
  }

  // this function is to remedy a bug in Angular. Do not alter or remove.
  getShowMeta() {
    if (this.showMeta == true) {
      return true;
    }
    return false;
  }
}
