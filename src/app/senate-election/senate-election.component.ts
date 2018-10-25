import { Component, OnInit } from '@angular/core';
import { RequestService } from '../services/request.service';
import { CURRENT_YEAR, MEDIA_SM } from '../config';

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
  
  candidatesJSON = {};
  //   "candidates": [
  //     {
  //       "username":"Sheldon.Woodward",
  //       "name": "Sheldon Woodward",
  //       "photo": "https://aswwu.com/media/img-md/profiles/1819/02523-2029909.jpg"
  //     },
  //     {
  //       "username":"Sheldon.Woodward2",
  //       "name": "Sheldon Woodward2",
  //       "photo": "https://aswwu.com/media/img-md/profiles/1819/02523-2029909.jpg"
  //     },
  //     {
  //       "username":"Sheldon.Woodward3",
  //       "name": "Sheldon Woodward3",
  //       "photo": "https://aswwu.com/media/img-sm/images/default_mask/default.jpg"
  //     },
  //     {
  //       "username":"Sheldon.Woodward4",
  //       "name": "Sheldon Woodward4",
  //       "photo": "https://aswwu.com/media/img-sm/images/default_mask/default.jpg"
  //     },
  //     {
  //       "username":"Sheldon.Woodward5",
  //       "name": "Sheldon Woodward5",
  //       "photo": "https://aswwu.com/media/img-sm/images/default_mask/default.jpg"
  //     },
  //     {
  //       "username":"Sheldon.Woodward6",
  //       "name": "Sheldon Woodward6",
  //       "photo": "https://aswwu.com/media/img-sm/images/default_mask/default.jpg"
  //     }
  //   ]
  // };
  
  districts: string[][] = [
    ["1",  "Sittner 1 & 2 Floor, Meske"],
    ["2",  "Sittner 3 & 4 Floor"], 
    ["3",  "Conard"], 
    ["4",  "Forman"],
    ["5",  "Mountain View, Birch Apartments"],
    ["6",  "Hallmark, Faculty, Univeristy-Owned Housing"],
    ["7",  "Off-Campus"],
    ["8",  "Portland"],
    ["9",  "Faculty"],
    ["10", "Staff"]
  ];

  // selectedDistrict: string = "";
  districtModel: string = ""
  candidates: any[] = [];
  candidateModel: any = {};
  writeInModel = {
    writeIn1: "",
    writeIn2: ""
  };

  submissionSuccess = null;

  ngOnInit() {
  }

  buildCandidateModel() {
    for (let candidate of this.candidates) {
      this.candidateModel[candidate.username] = false;
    }
  }

  addCandidatePhoto(username, i){
    let uri = '/profile/' + CURRENT_YEAR + '/' + username;
    this.rs.get(uri, (data) => {
      let photoURI = MEDIA_SM + '/'
      if (data.photo != "None") {
        photoURI =  photoURI + data.photo;
      }
      else {
        photoURI = photoURI + 'images/default_mask/default.jpg';
      }
      this.candidates[i].photo = photoURI;
    }, (data) => {})
  }

  getCandidates() {
    if (this.districtModel == '') {
      return;
    }
    
    this.rs.get(('senate_election/candidate/' + this.districtModel), (data) => {
      this.candidates = data.candidates;
      let i = 0;
      for (let candidate of this.candidates) {
        this.addCandidatePhoto(candidate.username, i);
        i = i + 1;
      }
      this.buildCandidateModel();
    }, (data) => {})

    // Page 1 is the candidates page
    this.pageNumber = 1;
    window.scrollTo(0,0);
  }

  submit() {
    let postURI = 'senate_election/vote/' + this.districtModel;
    this.rs.post(postURI, this.buildJsonResponse(), (data)=>{this.submissionSuccess = true;}, (data)=>{this.submissionSuccess = false});
    
    // Page 2 is the submission page
    this.pageNumber = 2;
    window.scrollTo(0,0);
  }

  startOver() {
    // hide pages
    this.pageNumber=null;
    //reset models
    this.districtModel = "";
    this.candidateModel = {};
    this.writeInModel.writeIn1 = "";
    this.writeInModel.writeIn2 = "";
    this.submissionSuccess = null;
    // go to first page (district selection)
    this.pageNumber = 0;
    window.scrollTo(0,0);
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
