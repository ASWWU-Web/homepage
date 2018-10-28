import { Component, OnInit } from '@angular/core';
import { RequestService } from '../services/request.service';

@Component({
  selector: 'open-forum',
  templateUrl: './open-forum.component.html',
  styleUrls: ['./open-forum.component.css']
})
export class OpenForumComponent implements OnInit {

  constructor(private rs: RequestService) { }

  officers = [
    'President',
    'Vice President',
    'Financial VP',
    'Social VP',
    'Spiritual VP',
    'Other Questions'
  ];

  selectedOfficer = '';
  messageBody = '';
  maxChars=1000;
  minChars=10;

  formReady: boolean = false;
  sendStatus = '';
  showSendStatus = false;
  sendFailed = false;

  ngOnInit() {
  }

  checkForm(): boolean {
    if (this.messageBody.length >= this.minChars && this.selectedOfficer != '') {
      return true;
    } else {
      return false;
    }
  }

  sendMessage() {
    let uri = "homepage/open_forum";
    let data = {
      "recipient": this.selectedOfficer,
      "message_body": this.messageBody.slice(0, this.maxChars),
    };
    let success = false;
    if (this.checkForm()) {
      this.showSendStatus = true;
      this.sendFailed = false;
      this.sendStatus = 'Loading...';
      this.rs.post(uri, data, (data)=>{
        this.sendStatus = 'Message Sent';
        this.selectedOfficer = '';
        this.messageBody = '';
      }, (data)=>{
        this.sendFailed = true;
        this.sendStatus = 'Delivery failed! Please contact aswwu.webmaster@wallawalla.edu for further assistance.';
      } );
    }
  }
}
