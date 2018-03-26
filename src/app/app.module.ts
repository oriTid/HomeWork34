import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MultipleBoardComponent } from './multiple-board/multiple-board.component';
import { JSonArrComponent } from './j-son-arr/j-son-arr.component';


@NgModule({
  declarations: [
    AppComponent,
    MultipleBoardComponent,
    JSonArrComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
