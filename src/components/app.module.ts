import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  RouterModule } from '@angular/router';
import { routes } from './app-routing.module';
import AppComponent from './app.component';
import InlineComponent from './inline.component';
@NgModule({
  declarations: [
    AppComponent,
    InlineComponent
  ],
  exports: [RouterModule],
  imports: [ BrowserModule, routes ],
  bootstrap: [ AppComponent ]
})
export default class AppModule {}
