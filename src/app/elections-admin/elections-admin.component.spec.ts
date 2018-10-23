import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectionsAdminComponent } from './elections-admin.component';

describe('ElectionsAdminComponent', () => {
  let component: ElectionsAdminComponent;
  let fixture: ComponentFixture<ElectionsAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectionsAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectionsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
