import { Component, OnInit } from '@angular/core';
import { RequestService } from '../services/request.service';

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
  //    add a clear button to candidate selection page
  //



  showDistricts: boolean = false;
  districts: string[] = ['1','2', '3', '4','5','6','7'];

  candidatesJSON = {
    "candidates": [
        {
            "username":"Sheldon.Woodward",
            "name": "Sheldon Woodward",
            "photo": ""
        },
        {
            "username":"Sheldon.Woodward2",
            "name": "Sheldon Woodward2",
            "photo": ""
        },
        {
            "username":"Sheldon.Woodward3",
            "name": "Sheldon Woodward3",
            "photo": ""
        }
    ]
  };

  selectedDistrict: string = "";

  candidates: any[] = [];

  constructor(private rs: RequestService) { }

  candidateModel = {};

  ngOnInit() {
    console.log(this.candidatesJSON.candidates[0].username);
    this.getCandidates();
  }

  buildCandidateModel() {
    for (let candidate of this.candidates) {
      this.candidateModel[candidate.username] = false;
    }
  }

  getCandidates() {
    // console.log(this.selectedDistrict);
    // this.rs.get(('senate-election/candidates/' + this.selectedDistrict), (data) => {
    //   data = this.candidatesJSON;
    //   console.log(data);
    // }, (data) => {})
    
    this.candidates = this.candidatesJSON.candidates;
    this.buildCandidateModel();

    this.showDistricts = false;
  }

  submit() {
    console.log(this.candidateModel);
  }

  valueChange($event, username){
    this.candidateModel[username] = $event;
    console.log(this.candidateModel);
  }

  enableVoting(candidateUsername) {
    let numSelected = 0;
    for (let candidate in this.candidateModel) {
      if (this.candidateModel[candidate] == true) {
        numSelected = numSelected + 1;
      }
    }
    if (numSelected >= 2) {
      return this.candidateModel[candidateUsername];
    } else {
      return true;
    }
  }

}
