import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderAdComponent } from './header-ad.component';

describe('HeaderAdComponent', () => {
  let component: HeaderAdComponent;
  let fixture: ComponentFixture<HeaderAdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderAdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
