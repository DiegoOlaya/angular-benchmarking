export class ImaginaryNum {
  public real: number;
  public imaginary: number;

  //Constructor for imaginary number class.
  constructor(randRange, r?:number, i?:number) {
    if (r == undefined || i == undefined) { //Sets state values to random number if r or i is not defined.
      this.real = Math.random()*randRange;
      this.imaginary = Math.random()*randRange;
    }
    else { //Sets state values to provided values if defined.
      this.real = r;
      this.imaginary = i;
    }
  }

  //Setter method for the real instance variable.
  public setReal(newVal:number) {
    this.real = newVal;
  }

  //Setter method for the imaginary instance variable.
  public setImag(newVal:number) {
    this.imaginary = newVal;
  }

  public setValues(newReal:number, newImag:number) {
    this.real = newReal;
    this.imaginary = newImag;
  }
}
