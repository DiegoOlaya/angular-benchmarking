import { Component, OnInit, ViewChild } from '@angular/core';

import { ArrayTesterComponent } from '../array-tester/array-tester.component';
import { ObjectTesterComponent } from '../object-tester/object-tester.component';
import { NumberTesterComponent } from '../number-tester/number-tester.component';

@Component({
  selector: 'app-timing-averager',
  templateUrl: './timing-averager.component.html',
  styleUrls: ['./timing-averager.component.css']
})
export class TimingAveragerComponent implements OnInit {

  @ViewChild(ArrayTesterComponent)
  @ViewChild(ObjectTesterComponent)
  @ViewChild(NumberTesterComponent)

  private timingComponent;
  private componentArray = [
    new ObjectTesterComponent(), new ArrayTesterComponent(), new NumberTesterComponent()
  ];

  public averagedTime:number;

  public setTimingComponent(index:number) {
    this.timingComponent = this.componentArray[index];
  }

  public startTiming(numRuns:number, cyclesPerRun:number, range:number) {
    var totalTime:number = 0;
    for (var i = 0; i < numRuns; i++) {
      this.timingComponent.startTiming(cyclesPerRun, range);
      totalTime += this.timingComponent.timingResult;
    }
    this.averagedTime = (totalTime/numRuns);
  }

  constructor() { }

  ngOnInit() {
  }

}
