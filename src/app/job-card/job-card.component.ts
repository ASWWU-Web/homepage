import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.css']
})
export class JobCardComponent {
  @Input() job: any;

  navigate() {
    window.location.href = 'https://aswwu.com/jobs/submit/' + this.job.jobID;
  }

  getJobDescription() {
    let description = this.job.job_description;
    return description.substring(0, description.indexOf('\n'));;
  }
}
