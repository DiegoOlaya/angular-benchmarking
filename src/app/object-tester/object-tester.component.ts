import { Component, OnInit } from '@angular/core';

import {ImaginaryNum } from './imaginary-num';

@Component({
  selector: 'app-object-tester',
  templateUrl: './object-tester.component.html',
  styleUrls: ['./object-tester.component.css']
})
export class ObjectTesterComponent implements OnInit {
  private randomRange = 51; //Random number generation will return int between 0 and 50.
  private randomNums:number[];

  public a:ImaginaryNum = new ImaginaryNum(this.randomRange);
  public b:ImaginaryNum = new ImaginaryNum(this.randomRange);
  public timingResult = 0;

  constructor() { }

  //Setter method for random value range.
  public setRandRange(newRange:number) {
    this.randomRange = newRange;
  }

  /**
    Generates and populates the randomNums array with random numbers needed for
    multiplication timing.
    @arg range Type: number. Specifies the range of possible values for generated random number.
    @arg numberOfNums Type: number. The amount of complex numbers that need to be
    generated.
  */
  private generateRandomNumbers(range:number, numberOfNums:number) {
    this.randomNums = [];
    //Loop exit multiplied by 4 b/c multiplication requires to complex numbers, and
    //each number has 2 values that must be generated.
    for (var i = 0; i < (numberOfNums*4); i++) {
      this.randomNums.push(Math.random()*range);
    }
  }

  /**
    Access new values in randomNums and sets the objects to match those values.
    @arg index Type:number. The index in randomNums where the first number to be
    used is located.
  */
  private newNums(index:number) {
    this.a.setValues(this.randomNums[index], this.randomNums[index+1]);
    this.b.setValues(this.randomNums[index+2], this.randomNums[index+3]);
  }

  //Multiplies two imaginary numbers together.
  //Args: a,b: ImaginaryNum objects to be multiplied together.
  //Returns: c: ImaginaryNum object containing result.
  private multImagNums(a:ImaginaryNum, b:ImaginaryNum) {
    var c_r : number = (a.real * b.real) - (a.imaginary * b.imaginary);
    var c_i : number = (a.imaginary * b.real) + (b.imaginary * a.real);
    var c : ImaginaryNum = new ImaginaryNum(this.randomRange, c_r, c_i);
    return (c);
  }

  /**
    Times how long it takes to complete n cycles of random number multiplication.
    @arg cycles Type: number. The number of times the multiplication task will
    take place.
    @arg range OPTIONAL Type: number. Specifies the range of possible values for generated random number.
  */
  public startTiming(cycles:number, range?:number) {
    if (range != undefined) { //Changes random number range if user specifies a value.
      this.setRandRange(range);
    }
    this.generateRandomNumbers(this.randomRange, cycles); //Used to eliminate Math.random() timing artifacts.
    var index = 0; //Used to access this.randomNums array.

    var processTimer = window.performance;
    var start = processTimer.now();
    for(var i=0; i < cycles; i++) { //Generates and multiplies two imaginary numbers a set number of times.
      this.newNums(index);
      this.multImagNums(this.a, this.b);
      index = index + 4; //Increments index so no numbers are reused.
    }
    var end = processTimer.now();

    this.timingResult = end - start; //Assigns result to variable which is then passed to client view.
  }

  ngOnInit() {
  }

}
