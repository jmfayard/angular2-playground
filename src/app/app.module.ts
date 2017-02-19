import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {LoService} from "./lo.service";
import {ParseService} from "./parse.service";
import { ParsePipe } from './parse.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ParsePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [LoService, ParseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
