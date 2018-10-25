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
    'Treasurer',
    'Social VP',
    'Spiritual VP',
    'Other'
  ];

  selectedOfficer = '';

  messageBody = '';

  messsageLength = this.messageBody.length;

  maxChars=1000;

  minChars=100;

  formValid: boolean = true;

  ngOnInit() {
  }

  checkForm(): boolean {
    
    return true;
  }

  sendMessage() {
    let valid = this.checkForm();
    let uri = "homepage/open_forum";
    let data = {
      "recipient": this.selectedOfficer,
      "message_body": this.messageBody.slice(0, this.maxChars),
    };
    this.rs.post(uri, data, (data)=>{console.log(data)}, (data)=>{console.log(data)} );
  }

}
