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

  private randomNums:number[]; //Stores randomly generated numbers to use during multiplication.

  public timingResult:number;

  constructor() {}

  /**
    Generates a dummy array which will be given new values in this.startTiming().
  */
  private generateComplexNumPlaceholder() {
    var newNum = [1, 1];
    return newNum;
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
    for (var i = 0; i < (numberOfNums * 4); i++) {
      this.randomNums.push(Math.random()*range);
    }
  }

  /**Generates a new complex number in an existing array data structure.
    @arg num Type: number[]. The array data structure to update.
    @arg index Type: number. The index at which to get new numbers from this.randomNums.
  */
  private updateNum(num:number[], index:number) {
    num[0] = this.randomNums[index];
    num[1] = this.randomNums[index + 1];
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
    this.a = this.generateComplexNumPlaceholder();
    this.b = this.generateComplexNumPlaceholder();
    this.generateRandomNumbers(range, cycles);
    var index = 0; //Used to access this.randomNums.

    var processTimer = window.performance;
    var start = processTimer.now();
    for (var i = 0; i < cycles; i++) {
      this.updateNum(this.a, index);
      this.updateNum(this.b, index+2);
      var c = this.multiplyImagNums(this.a, this.b);
      index = index + 4; //Increments to avoid repeating numbers.
    }
    var end = processTimer.now();
    this.timingResult = (end-start); //Assigns result to state field that is then passed to client view.
  }

  ngOnInit() {}

}
