import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { DndDirective } from './directive/Dnd';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,DndDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
