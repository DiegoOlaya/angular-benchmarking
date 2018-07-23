declare var Plotly: any; //Imports Plotly library for use.

export class PlotlyGrapher {

  private traceArray:Object[] = []; //Stores the plotly objects that are required for plotting data.

  /**
    Class constructor. Initializes traceArray variable.
    @arg y_data Type: any[]. The array of collected data to be plotted on the y axis.
    @arg xCoords Type: number[]. The x coordinates corresponding to the collected data.
    @arg usrMode Type: string. The user provided options for the plotly library.
    @arg usrType Type: string. The type of plot that is desired.
  */
  constructor(y_data:any[], xCoords:number[], usrMode:string, usrType:string) {
    for (let datum of y_data) {
      var obj = {
        x: xCoords,
        y: datum,
        mode: usrMode,
        type: usrType
      };
      this.traceArray.push(obj);
    }
  }

  /**
    Plots the provided data using plotly.js.
    @arg targetDivID Type:string. The ID of the div where the plot should appear.
  */
  public plot(targetDivID:string) {
    Plotly.newPlot(targetDivID, this.traceArray);
  }

}
