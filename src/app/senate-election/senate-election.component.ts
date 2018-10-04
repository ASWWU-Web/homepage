import { Component, OnInit } from '@angular/core';
import { RequestService } from '../services/request.service';

import * from './candidates.json';

@Component({
  selector: 'app-senate-election',
  templateUrl: './senate-election.component.html',
  styleUrls: ['./senate-election.component.css']
})
export class SenateElectionComponent implements OnInit {

  // TODO:
  //    on initialization get list of candidates (alternatively wait until "Go" and have server only return candidates for one district)
  //    Show the first page with district
  //    bind variable to district choice
  //    Go button that sets show candidates to true
  //    Set districts html to show only when show-candidates is false
  //    Set candidates html to show only when show-candidates is true and candidate list exists
  //    on "Go" build district-candidate list based on selected district
  //      fetch display names and images for district candidate list if we decide not to included 
  //        them in original candidate list
  //    use ngfor on district-candidate list
  //    use ngstyle to set unselected pictures to faded state when number of selected pictures + input boxes fillled >= 2
  //    set empty write-in inputs to inactive (grayed out) state when number of selected pictures + input boxes fillled >=2
  //



  showDistricts: boolean = true;
  districts: string[] = ['1','2', '3', '4','5','6','7'];

  candidatesJSON = {
    "candidates": [
        {
            "username":"Sheldon.Woodward",
            "name": "Sheldon Woodward",
            "photo": "some_url"
        },
        {
            "username":"Sheldon.Woodward2",
            "name": "Sheldon Woodward2",
            "photo": "some_url2"
        },
        {
            "username":"Sheldon.Woodward3",
            "name": "Sheldon Woodward3",
            "photo": "some_url3"
        }
    ]
  };

  selectedDistrict: string = "";

  candidates: any[] = [];

  constructor(private rs: RequestService) { }

  ngOnInit() {
    console.log(this.candidatesJSON.candidates[0].username);
  }

  getCandidates() {
    // console.log(this.selectedDistrict);
    // this.rs.get(('senate-election/candidates/' + this.selectedDistrict), (data) => {
    //   data = this.candidatesJSON;
    //   console.log(data);
    // }, (data) => {})
    
    this.candidates = this.candidatesJSON.candidates;

    this.showDistricts = false;
  }

}
