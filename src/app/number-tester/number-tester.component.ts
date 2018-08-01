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
  private randomNums:number[];

  public timingResult;
  public usrRange:number;

  constructor() { }

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

  private generateNums(index:number) {
    this.a_r = this.randomNums[index];
    this.a_i = this.randomNums[index + 1];
    this.b_i = this.randomNums[index + 2];
    this.b_r = this.randomNums[index + 3];
  }

  /**
    Multiplies two complex numbers together.
    @arg a_r Type: number. Represents real part of first imaginary nunmber.
    @arg a_i Type: number. Represents imaginary part of first imaginary number.
    @arg b_r Type: number. Represents real part of second imaginary nunmber.
    @arg b_i Type: number. Represents imaginary part of second imaginary number.
    @returns A number representing the real part of the result.
  */
  private multiplyNums_real(a_r:number, a_i:number, b_r:number, b_i:number) {
    var c_r = (a_r * b_r) - (a_i * b_i);
    return c_r;
  }

  /**
    Multiplies two complex numbers together.
    @arg a_r Type: number. Represents real part of first imaginary nunmber.
    @arg a_i Type: number. Represents imaginary part of first imaginary number.
    @arg b_r Type: number. Represents real part of second imaginary nunmber.
    @arg b_i Type: number. Represents imaginary part of second imaginary number.
    @returns A number representing the imaginary part of the result.
  */
  private multiplyNums_imag(a_r:number, a_i:number, b_r:number, b_i:number) {
    var c_i = (a_i * b_r) + (a_r * b_i);
    return c_i;
  }

  /**
    Times how long it takes for given number of cycles of multiplication to occur.
    @arg cycles Type: number. The number of times the computer will generate and multiply a pair of complex numbers.
    @arg range Type: number. The multipler that determines the possible range of random values when generating new numbers.
  */
  public startTiming(cycles:number, range:number) {
    this.generateRandomNumbers(range, cycles);
    var index = 0; //Used to access this.randomNums.
    var processTimer = window.performance;
    var start = performance.now();
    for (var i = 0; i < cycles; i++) {
      this.generateNums(index);
      this.multiplyNums_real(this.a_r, this.a_i, this.b_r, this.b_i);
      this.multiplyNums_imag(this.a_r, this.a_i, this.b_r, this.b_i);
      index = index + 4; //Increments to avoid repeating numbers.
    }
    var end = performance.now();
    this.timingResult = (end - start);
  }

  ngOnInit() {
  }

}
