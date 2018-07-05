import { Component, OnInit } from '@angular/core';

import {ImaginaryNum } from './imaginary-num.ts';

@Component({
  selector: 'app-object-tester',
  templateUrl: './object-tester.component.html',
  styleUrls: ['./object-tester.component.css']
})
export class ObjectTesterComponent implements OnInit {
  public a: ImaginaryNum;
  public b: ImaginaryNum;
  private randomRange = 51; //Random number generation will return int between 0 and 50.

  constructor() {
    a = new ImaginaryNum(randomRange);
    b = new ImaginaryNum(randomRange);
  }

  //Setter method for random value range.
  function setRandRange(newRange: int) {
    this.randomRange = newRange;
  }

  //Used to generate new numbers on every test cycle. Avoids cacheing.
  function newNums() {
    a = new ImaginaryNum(randomRange);
    b = new ImaginaryNum(randomRange);
  }

  ngOnInit() {
  }

}
