import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenForumComponent } from './open-forum.component';

describe('OpenForumComponent', () => {
  let component: OpenForumComponent;
  let fixture: ComponentFixture<OpenForumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenForumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenForumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
