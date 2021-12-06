import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyStatisticComponent } from './company-statistic.component';

describe('CompanyStatisticComponent', () => {
  let component: CompanyStatisticComponent;
  let fixture: ComponentFixture<CompanyStatisticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyStatisticComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyStatisticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
