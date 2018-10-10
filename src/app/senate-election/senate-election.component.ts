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
  
  constructor(private rs: RequestService) { }
  
  
  // showDistricts: boolean = true;
  // showCandidates: boolean = false;
  // showSubmissionStatus: boolean = false;

  // Page 0 is districts page
  pageNumber: number = 0;
  
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
  
  districts: any = [
    "Sittner 1 & 2 Floor, Meske",
    "Sittner 3 & 4 Floor", 
    "Conard", 
    "Forman",
    "Mountain View, Birch Apartments",
    "Hallmark, Faculty, Univeristy-Owned Housing",
    "Off-Campus",
    "Portland",
    "Faculty",
    "Staff"
  ];

  selectedDistrict: string = "1";
  candidates: any[] = [];
  candidateModel = {};
  writeInModel = {
    writeIn1: "",
    writeIn2: ""
  };

  ngOnInit() {
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

    // Page 1 is the candidates page
    this.pageNumber = 1;
    // this.showDistricts = false;
    // this.showCandidates = true;
    // this.showSubmissionStatus = false;
  }

  submit() {
    console.log(this.buildJsonResponse());
    let postURI = 'senate-election';
    this.rs.post(postURI, this.buildJsonResponse(), (data)=>{}, (data)=>{});
    
    // Page 2 is the submission page
    this.pageNumber = 2;
    // this.showDistricts = false;
    // this.showCandidates = false;
    // this.showSubmissionStatus = true;
  }

  valueChange($event, username){
    this.candidateModel[username] = $event;
  }

  enableVoting(name, isCandidate) {
    let numSelected = 0;
    for (let candidate in this.candidateModel) {
      if (this.candidateModel[candidate] == true) {
        numSelected = numSelected + 1;
      }
    }
    if (this.writeInModel.writeIn1.length > 0) {
      numSelected = numSelected + 1;
    }
    if (this.writeInModel.writeIn2.length > 0) {
      numSelected = numSelected + 1;
    }
    if (numSelected >= 2) {
      if (isCandidate) {
        return this.candidateModel[name];
      } else {
        return (name.length > 0);
      }
    } else {
      return true;
    }
  }

  buildJsonResponse() {
    let response = {
      vote_1: null,
      vote_2: null,
      write_in_1: null,
      write_in_2: null
    };
    for (let candidate in this.candidateModel) {
      if (this.candidateModel[candidate] == true) {
        if (!response.vote_1) {
          response.vote_1 = candidate;
        } else if (!response.vote_2) {
          response.vote_2 = candidate;
        } else {
          // something went wrong...
        }
      }
    }
    if (this.writeInModel.writeIn1.length > 0) {
      response.write_in_1 = this.writeInModel.writeIn1;
    }
    if (this.writeInModel.writeIn2.length > 0) {
      response.write_in_2 = this.writeInModel.writeIn2;
    }
    return response;
  }

}
