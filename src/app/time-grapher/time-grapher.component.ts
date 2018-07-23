import { Component, OnInit, ViewChild } from '@angular/core';

import { TimingAveragerComponent } from "../timing-averager/timing-averager.component";
import { PlotlyGrapher } from "./plotly-grapher";

@Component({
  selector: 'app-time-grapher',
  templateUrl: './time-grapher.component.html',
  styleUrls: ['./time-grapher.component.css']
})

@ViewChild(TimingAveragerComponent) //Allows access to methods from TimingAveragerComponent.

export class TimeGrapherComponent implements OnInit {

  public xCoords = new Array(1); //Set when graphing command is issued.
  private dataArray = new Array(); //Array holds the data for ea. implementation.

  public xCoordsDone:boolean = false;
  public timingDone:boolean = false;

  constructor() { }

  /**
    Initialized the xCoords array based on user parameters.
    @arg start Type: number. The first x coordinate in the array.
    @arg end Type: number. The last x coordinate in the array.
    @arg skip Type: number. The interval of spacing between each x coordinate.
  */
  public initXCoords(start:number, end:number, skip:number) {
    console.log(typeof this.xCoords);
    for (var i = start; i <= end; i = i + skip) {
      this.xCoords.push(i);
    }
    this.xCoordsDone = true;
  }

  /**
  Begins the timing tests for all imlpementations based on the user provided cycles.
  @arg runs Type: number. The number of tests that are averaged per number of cycles.
  @arg range Type: number. The range for the random numbers that are generated.
  */
  public runTiming(runs:number, range:number) {
    var timerComponent = new TimingAveragerComponent();
    for (var i = 0; i < 3; i++) {
      timerComponent.setTimingComponent(i);
      var data:number[] = [];
      for (let x of this.xCoords) {
        timerComponent.startTiming(runs, x, range);
        data.push(timerComponent.averagedTime);
      }
      this.dataArray.push(data);
    }
    this.timingDone = true;
  }

  /**
  Plots the timing results.
  @arg plotlyMode Type:string. The user provided options for the plotly library.
  @arg plotlyType Type: string. The type of plot that is desired.
  @arg plotTarget Type: string. The ID of the div where the plot will go.
  */
  public plot(plotlyMode:string, plotlyType:string, plotTarget:string) {
    var plotter = new PlotlyGrapher(this.dataArray, this.xCoords, plotlyMode, plotlyType);
    plotter.plot(plotTarget);
    this.xCoordsDone = false;
    this.timingDone = false;
  }

  ngOnInit() {
  }

}
