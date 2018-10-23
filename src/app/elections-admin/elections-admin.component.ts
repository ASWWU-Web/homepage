import { Component, OnInit } from '@angular/core';
import { RequestService } from '../services/request.service';

@Component({
  selector: 'app-elections-admin',
  templateUrl: './elections-admin.component.html',
  styleUrls: ['./elections-admin.component.css']
})
export class ElectionsAdminComponent implements OnInit {

  constructor(private rs: RequestService) { }

  candidate = {
    username: null,
    full_name: null,
  };

  district = null;

  ngOnInit() {
  }

  submit() {
    let postURI = 'senate_election/candidate/' + this.district;
    this.rs.post(postURI, this.candidate, (data)=>{}, (data)=>{});
  }

}
