import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimingAveragerComponent } from './timing-averager.component';

describe('TimingAveragerComponent', () => {
  let component: TimingAveragerComponent;
  let fixture: ComponentFixture<TimingAveragerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimingAveragerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimingAveragerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
