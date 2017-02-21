import {Component, OnInit, Input} from '@angular/core';
import {ICountry, COUNTRIES} from "./country.module";

@Component({
  selector: 'country-detail',
  template: `
<div class="pa3 pa5-ns">
  <h4 class="f6 fw6">{{country.localName}}</h4>
  <dl class="f6 lh-title mv2">
    <dt class="dib b">English Name:</dt>
    <dd class="dib ml0 gray">{{country.englishName}}</dd>
  </dl>
  <dl class="f6 lh-title mv2">
    <dt class="dib b">Country Code:</dt>
    <dd class="dib ml0 gray">{{country.iso}}</dd>
  </dl>
  <dl class="f6 lh-title mv2">
    <dt class="dib b">Currency:</dt>
    <dd class="dib ml0 gray">{{country.currency}}</dd>
  </dl>
  <dl class="f6 lh-title mv2">
    <dt class="dib b">Calling Code:</dt>
    <dd class="dib ml0 gray">{{country.callingCode}}</dd>
  </dl>
</div>
  `,
  styles: []
})
export class CountryDetailComponent implements OnInit {

  @Input('country') country: ICountry = null;

  constructor() {
    if (this.country == null) {
      this.country = COUNTRIES.filter((c) => c.iso == "FR")[0];
    }
  }

  ngOnInit() {
  }

}
