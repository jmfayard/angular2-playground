import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
<div data-name="component">
  <section class="vh-100 bg-washed-blue baskerville">
  <header class="tc ph5 lh-copy">
      <h1 class="f1 f-headline-l code mb3 fw9 dib tracked-tight light-purple">404</h1>
      <h2 class="tc f1-l fw1">Sorry, we can't find the page you are looking for.</h2>
  </header>
 
</section>

  </div>
  `,
  styles: []
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
