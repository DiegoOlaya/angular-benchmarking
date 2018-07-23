import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ObjectTesterComponent } from './object-tester/object-tester.component';
import { ArrayTesterComponent } from './array-tester/array-tester.component';
import { NumberTesterComponent } from './number-tester/number-tester.component';
import { TimingAveragerComponent } from './timing-averager/timing-averager.component';
import { TimeGrapherComponent } from './time-grapher/time-grapher.component';

@NgModule({
  declarations: [
    AppComponent,
    ObjectTesterComponent,
    ArrayTesterComponent,
    NumberTesterComponent,
    TimingAveragerComponent,
    TimeGrapherComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
