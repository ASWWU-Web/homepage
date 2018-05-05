import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestService } from '../services/request.service';
import { resolveMaskImage } from '../resolveMaskImage';

import { environment } from '../../environments/environment';
import { MEDIA_URI, MEDIA_XS, MEDIA_SM } from '../config'

@Component({
  selector: 'profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})

export class ProfileCardComponent {
  @Input() profile: any;

  navigate() {
    window.location.href = 'https://aswwu.com/mask/profile/' + this.profile.username;
  }
  getMaskImage() {
    return resolveMaskImage(this.profile.photo, MEDIA_SM);
  }
}
