import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectTesterComponent } from './object-tester.component';

describe('ObjectTesterComponent', () => {
  let component: ObjectTesterComponent;
  let fixture: ComponentFixture<ObjectTesterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjectTesterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectTesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
