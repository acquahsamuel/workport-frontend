import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriberFooterComponent } from './subscriber-footer.component';

describe('SubscriberFooterComponent', () => {
  let component: SubscriberFooterComponent;
  let fixture: ComponentFixture<SubscriberFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscriberFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriberFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
