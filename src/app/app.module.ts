import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ObjectTesterComponent } from './object-tester/object-tester.component';
import { ArrayTesterComponent } from './array-tester/array-tester.component';
import { NumberTesterComponent } from './number-tester/number-tester.component';

@NgModule({
  declarations: [
    AppComponent,
    ObjectTesterComponent,
    ArrayTesterComponent,
    NumberTesterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
