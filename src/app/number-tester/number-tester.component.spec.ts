import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberTesterComponent } from './number-tester.component';

describe('NumberTesterComponent', () => {
  let component: NumberTesterComponent;
  let fixture: ComponentFixture<NumberTesterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberTesterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberTesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
