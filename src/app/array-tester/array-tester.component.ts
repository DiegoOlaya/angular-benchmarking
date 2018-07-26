import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array-tester',
  templateUrl: './array-tester.component.html',
  styleUrls: ['./array-tester.component.css']
})
export class ArrayTesterComponent implements OnInit {

  //Variables storing the two complex numbers to be multiplied.
  private a:number[];
  private b:number[];
  public timingResult:number;

  constructor() {}

  //Randomly generates and returns a complex number represented by an array of two numbers.
  private generateComplexNum(range:number) {
    var newNum = [Math.random()*range, Math.random()*range];
    return newNum;
  }

  /**Generates a new complex number in an existing array data structure.
    @arg num Type: number[]. The array data structure to update.
    @arg range Type:number. The range of possible new values. (0 to range-1).
  */
  private updateNum(num:number[], range:number) {
    num[0] = Math.random()*range;
    num[1] = Math.random()*range;
  }

  /**Multiplies two complex numbers and returns the result.
    @arg a Type: number[]. Complex number to multiply.
    @arg b Type: number[]. Complex number to multiply.
    @returns Type: number[]. Array representing the result of the multiplication a*b.
  */
  private multiplyImagNums(a:number[], b:number[]) {
    var c_r = (a[0] * b[0]) - (a[1] * b[1]);
    var c_i = (a[1] * b[0]) + (a[0] * b[1]);
    return [c_r, c_i];
  }

  /**
    Times how long it takes for given number of cycles of multiplication to occur.
    @arg cycles Type: number. The number of times the computer will generate and multiply a pair of complex numbers.
    @arg range Type: number. The multipler that determines the possible range of random values when generating new numbers.
  */
  public startTiming(cycles:number, range:number) {
    this.a = this.generateComplexNum(range);
    this.b = this.generateComplexNum(range);
    var processTimer = window.performance;
    var start = processTimer.now();
    for (var i = 0; i < cycles; i++) {
      this.updateNum(this.a, range);
      this.updateNum(this.b, range);
      var c = this.multiplyImagNums(this.a, this.b);
    }
    var end = processTimer.now();
    this.timingResult = (end-start); //Assigns result to state field that is then passed to client view.
  }

  ngOnInit() {}

}
