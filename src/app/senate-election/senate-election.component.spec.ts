import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SenateElectionComponent } from './senate-election.component';

describe('SenateElectionComponent', () => {
  let component: SenateElectionComponent;
  let fixture: ComponentFixture<SenateElectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SenateElectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SenateElectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
