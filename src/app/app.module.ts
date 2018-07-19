import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ObjectTesterComponent } from './object-tester/object-tester.component';
import { ArrayTesterComponent } from './array-tester/array-tester.component';

@NgModule({
  declarations: [
    AppComponent,
    ObjectTesterComponent,
    ArrayTesterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
