import { Component, OnInit } from '@angular/core';
import { HomepageRequestService } from '../../shared-ng/services/services';
import { AuthService } from '../../shared-ng/services/auth.service';

@Component({
  selector: 'open-forum',
  templateUrl: './open-forum.component.html',
  styleUrls: ['./open-forum.component.css']
})
export class OpenForumComponent implements OnInit {

  constructor(private hprs: HomepageRequestService, private auth: AuthService) { }

  officers = [
    'President',
    'Vice President',
    'Financial VP',
    'Social VP',
    'Spiritual VP',
    'Marketing VP'
  ];

  selectedOfficer = '';
  messageBody = '';
  maxChars = 1000;
  minChars = 10;

  formReady: boolean = false;
  sendStatus = '';
  showSendStatus = false;
  sendFailed = false;

  ngOnInit() { }

  checkForm(): boolean {
    if (this.messageBody.length >= this.minChars && this.selectedOfficer !== '' && this.rs.isLoggedOn()) {
      return true;
    } else {
      return false;
    }
  }

  sendMessage() {
    const uri = 'homepage/open_forum';
    const data = {
      'recipient': this.selectedOfficer,
      'message_body': this.messageBody.slice(0, this.maxChars),
    };
    const success = false;
    if (this.checkForm()) {
      this.showSendStatus = true;
      this.sendFailed = false;
      this.sendStatus = 'Loading...';
      this.hprs.post(uri, data, (data) => {
        this.sendStatus = 'Message Sent';
        this.selectedOfficer = '';
        this.messageBody = '';
      }, (data) => {
        this.sendFailed = true;
        this.sendStatus = 'Delivery failed! Please contact aswwu.webmaster@wallawalla.edu for further assistance.';
      } );
    }
  }

  getLoggedOn() {
    return this.auth.isLoggedIn();
  }
}
