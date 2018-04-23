import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestService } from '../services/request.service';

import { environment } from '../../environments/environment';
import { MEDIA_URI, MEDIA_XS, MEDIA_SM } from '../config'

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})

export class ProfileCardComponent {
  @Input() profile: any;

  navigate() {
    return;
  }

  getPhoto(photo_URI:string, media_link:string = MEDIA_SM) {
    return (media_link + '/' + photo_URI);
  }
}
