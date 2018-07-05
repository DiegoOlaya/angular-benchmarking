export class ImaginaryNum {
  public real: number,
  public imaginary: number

  constructor( //Sets the two state variables for the imaginary number object.
    randRange: number //Argument determines the range of numbers possible.
  ) {
    this.real = Math.random()*randRange;
    this.imaginary = Math.random()*randRange;
  }
}
