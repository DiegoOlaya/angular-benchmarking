import { Component, OnInit } from '@angular/core';

import {ImaginaryNum } from './imaginary-num';

@Component({
  selector: 'app-object-tester',
  templateUrl: './object-tester.component.html',
  styleUrls: ['./object-tester.component.css']
})
export class ObjectTesterComponent implements OnInit {
  public a: ImaginaryNum;
  public b: ImaginaryNum;
  private randomRange = 51; //Random number generation will return int between 0 and 50.
  public timeResult = 0;

  constructor() { }

  //Setter method for random value range.
  public setRandRange(newRange:number) {
    this.randomRange = newRange;
  }

  //Used to generate new numbers on every test cycle. Avoids cacheing.
  private newNums() {
    this.a = new ImaginaryNum(this.randomRange);
    this.b = new ImaginaryNum(this.randomRange);
  }

  //Multiplies two imaginary numbers together.
  //Args: a,b: ImaginaryNum objects to be multiplied together.
  //Returns: c: ImaginaryNum object containing result.
  private multImagNums(a: ImaginaryNum, b: ImaginaryNum) {
    var c_r : number = (a.real * b.real) - (a.imaginary * b.imaginary);
    var c_i : number = (a.imaginary * b.real) + (b.imaginary * a.real);
    var c : ImaginaryNum = new ImaginaryNum(this.randomRange, c_r, c_i);
    return (c);
  }

  public startTiming(cycles: number, range?:number) {
    if (range != undefined) { //Changes random number range if user specifies a value.
      this.setRandRange(range);
    }
    var processTimer = window.performance;
    var start = processTimer.now();
    for(var i=0; i < cycles; i++) { //Generates and multiplies two imaginary numbers a set number of times.
      this.newNums();
      this.multImagNums(this.a, this.b);
    }
    var end = processTimer.now();
    this.timeResult = end - start; //Assigns result to variable which is then passed to client view.
  }

  ngOnInit() {
  }

}
