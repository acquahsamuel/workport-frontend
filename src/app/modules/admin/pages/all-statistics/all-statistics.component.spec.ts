import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllStatisticsComponent } from './all-statistics.component';

describe('AllStatisticsComponent', () => {
  let component: AllStatisticsComponent;
  let fixture: ComponentFixture<AllStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllStatisticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
