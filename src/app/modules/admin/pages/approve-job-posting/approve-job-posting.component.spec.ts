import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveJobPostingComponent } from './approve-job-posting.component';

describe('ApproveJobPostingComponent', () => {
  let component: ApproveJobPostingComponent;
  let fixture: ComponentFixture<ApproveJobPostingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApproveJobPostingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveJobPostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
