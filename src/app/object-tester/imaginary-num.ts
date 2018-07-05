export class ImaginaryNum {
  public real: number,
  public imaginary: number

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
}
