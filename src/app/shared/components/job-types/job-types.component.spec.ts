import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobTypesComponent } from './job-types.component';

describe('JobTypesComponent', () => {
  let component: JobTypesComponent;
  let fixture: ComponentFixture<JobTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobTypesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
