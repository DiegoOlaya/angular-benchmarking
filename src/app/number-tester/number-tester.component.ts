import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-number-tester',
  templateUrl: './number-tester.component.html',
  styleUrls: ['./number-tester.component.css']
})
export class NumberTesterComponent implements OnInit {

  private a_r:number;
  private a_i:number;
  private b_i:number;
  private b_r:number;

  public timingResult;

  constructor() { }

  function generateNums(range:number) {
    a_r = Math.random()*range;
    a_i = Math.random()*range;
    b_i = Math.random()*range;
    b_r = Math.random()*range;
  }

  /**
    Multiplies two complex numbers together.
    @arg a_r Type: number. Represents real part of first imaginary nunmber.
    @arg a_i Type: number. Represents imaginary part of first imaginary number.
    @arg b_r Type: number. Represents real part of second imaginary nunmber.
    @arg b_i Type: number. Represents imaginary part of second imaginary number.
    @returns Array of two numbers representing real and imaginary parts of result.
  */
  function multiplyNums(a_r:number, a_i:number, b_r:number, b_i:number) {
    c_r = (a_r * b_r) - (a_i * b_i);
    c_i = (a_i * b_r) + (a_r * b_i);
    return [c_r, c_i];
  }

  /**
    Times how long it takes for given number of cycles of multiplication to occur.
    @arg cycles Type: number. The number of times the computer will generate and multiply a pair of complex numbers.
    @arg range Type: number. The multipler that determines the possible range of random values when generating new numbers.
  */
  function startTiming(cycles:number, range:number) {
    var processTimer = window.performance;
    var start = performance.now();
    for (var i = 0; i < cycles; i++) {
      generateNums();
      multiplyNums(a_r, a_i, b_r, b_i);
    }
    var end = performance.now();
    timingResult = (end - start);
  }

  ngOnInit() {
  }

}
