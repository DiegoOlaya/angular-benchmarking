import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayTesterComponent } from './array-tester.component';

describe('ArrayTesterComponent', () => {
  let component: ArrayTesterComponent;
  let fixture: ComponentFixture<ArrayTesterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrayTesterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrayTesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
