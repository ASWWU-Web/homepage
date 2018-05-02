import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.css']
})
export class JobCardComponent {
  @Input() job: any;

  navigate() {
    return;
  }
}
