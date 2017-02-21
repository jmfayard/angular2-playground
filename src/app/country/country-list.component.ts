import { Component, OnInit } from '@angular/core';
import {COUNTRIES} from "./country.module";

@Component({
  selector: 'country-list',
  template: `
<div  *ngFor="let country of countries">

  <country-detail [country]="country"></country-detail>
<ul>
  `,
  styles: []
})
export class CountryListComponent implements OnInit {

  countries = COUNTRIES;

  constructor() { }

  ngOnInit() {
  }

}
