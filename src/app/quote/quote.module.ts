import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuoteDetailComponent } from './quote-detail.component';
import {ProgrammingQuoteService} from "./quote.service";

@NgModule({
  imports: [
    CommonModule
  ],
  providers:[ProgrammingQuoteService],
  exports: [QuoteDetailComponent],
  declarations: [QuoteDetailComponent]
})
export class QuoteModule { }
