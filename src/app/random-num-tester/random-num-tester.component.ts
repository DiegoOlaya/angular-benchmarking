import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random-num-tester',
  templateUrl: './random-num-tester.component.html',
  styleUrls: ['./random-num-tester.component.css']
})
export class RandomNumTesterComponent implements OnInit {

  public timeResult:number;

  constructor() { }

  ngOnInit() {
  }

  public startTiming(cycles:number, range:number) {
    var timer = window.performance;
    var c = 0;
    var start = timer.now();
    for (var i = 0; i < cycles; i++) {
      c = Math.random()*range;
    }
    var end = timer.now();
    this.timeResult = (end-start);
  }

}
