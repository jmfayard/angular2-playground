import {Component} from '@angular/core';
import {ProgrammingQuote} from "./quote-model";
import {ProgrammingQuoteService} from './quote.service';

@Component({
  selector: 'app-quote-detail',
  template: `

<p class="pl4"> 

<a (click)="newQuote()" 
class="f6 link dim br-pill ph3 pv2 mb2 dib white bg-mid-gray"
>

  New Random quote
</a>
</p>  
<div class="pa4">
  <blockquote class="athelas ml0 mt0 pl4 black-90 bl bw2 b--blue">
    <p class="f5 f4-m f3-l lh-copy measure mt0">
      {{quote.quote}}
    </p>
    <cite class="f6 ttu tracked fs-normal">
      {{quote.author}} -
      <a [href]="quote.url">(source)</a>
    </cite>
  </blockquote>
</div>

<hr>

  `,
  styles: []
})
export class QuoteDetailComponent {

  public quote: ProgrammingQuote = new ProgrammingQuote();

  constructor(private service: ProgrammingQuoteService) {
    this.newQuote();
  }

  public newQuote() {
    this.quote = this.service.randomQuote();
  }
}
