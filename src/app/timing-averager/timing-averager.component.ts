import { Component, OnInit } from '@angular/core';

import { ArrayTesterComponent } from './array-tester';
import { ObjectTesterComponent } from './object-tester';
import { NumberTesterComponent } from '.number-tester';

@Component({
  selector: 'app-timing-averager',
  templateUrl: './timing-averager.component.html',
  styleUrls: ['./timing-averager.component.css']
})
export class TimingAveragerComponent implements OnInit {

  private timingComponent:Object;
  private componentArray = [
    new ObjectTesterComponent(), new ArrayTesterComponent(), new NumberTesterComponent()
  ];

  public averagedTime:number;

  public setTimingComponent(index:number) {
    this.timingComponent = this.componentArray[index];
  }

  public startTiming(numRuns:number, cyclesPerRun:number, range:number) {
    var timer = window.performance;
    var totalTime:number = 0;
    for (var i = 0; i < numRuns; i++) {
      var start = timer.now();
      this.timingComponent.startTiming(cyclesPerRun, range);
      var end = timer.now()
      totalTime += (end-start);
    }
    this.averagedTime = (totalTime/numRuns);
  }

  constructor() { }

  ngOnInit() {
  }

}
