import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array-tester',
  templateUrl: './array-tester.component.html',
  styleUrls: ['./array-tester.component.css']
})
export class ArrayTesterComponent implements OnInit {

  //Variables storing the two complex numbers to be multiplied.
  var a:number[];
  var b:number[];

  constructor() {}

  //Randomly generates and returns a complex number represented by an array of two numbers.
  function generateComplexNum(range:number) {
    newNum = [Math.random()*range, Math.random()*range];
    return newNum;
  }

  /**Multiplies two complex numbers and returns the result.
    @arg a Type: number[]. Complex number to multiply.
    @arg b Type: number[]. Complex number to multiply.
    @returns Type: number[]. Array representing the result of the multiplication a*b.
  */
  function multiplyImagNums(a:number[], b:number[]) {
    c_r = (a[0] * b[0]) - (a[1] * b[1]);
    c_i = (a[1] * b[0]) + (a[0] * b[1]);
    return [c_r, c_i];
  }

  /**
    Times how long it takes for given number of cycles of multiplication to occur.
    @arg cycles Type: number. The number of times the computer will generate and multiply a pair of complex numbers.
    @arg range Type: number. The multipler that determines the possible range of random values when generating new numbers.
    @returns Type: number. The amount of time the computer took to complete all the cycles.
  */
  function startTiming(cycles:number, range:number) {
    var processTimer = window.performance;
    var start = processTimer.now();
    for (var i = 0; i < cycles; i++) {
      a = generateComplexNum(range);
      b = generateComplexNum(range);
      c = multiplyImagNums(a, b);
    }
    var end = processTimer.now();
    return (end-start);
  }

  ngOnInit() {}

}
