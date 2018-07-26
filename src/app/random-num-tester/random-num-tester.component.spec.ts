import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomNumTesterComponent } from './random-num-tester.component';

describe('RandomNumTesterComponent', () => {
  let component: RandomNumTesterComponent;
  let fixture: ComponentFixture<RandomNumTesterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomNumTesterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomNumTesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
