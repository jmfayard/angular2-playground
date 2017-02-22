import { Component } from '@angular/core';
import {CountryService} from "./country.service";
import {Router} from "@angular/router";
import {ICountry} from "./country-model";

@Component({
  selector: 'country-list',
  template: `

<main >
  <ul class="list ph2 ph5-ns ">
  <li 
  *ngFor="let country of countries" 
  class="dib mr2">
    <a 
    (click)="gotoCountry(country)"
    class="f4 f2-ns b db pa2 link dim mid-gray"
    >
      {{country.englishName}}
    </a>
   </li>
  
  </ul>
</main>

  `,
  styles: []
})
export class CountryListComponent {

  countries : ICountry[];

  constructor(
    private service: CountryService,
    private router: Router,
  ) {
    console.log("router", router);

  }

  ngOnInit() {
    this.service.getCountries()
      .subscribe(
        (next) => {
          console.log("CountryListComponent Next", next);
          this.countries = next;
        },
        (error) => console.error("CountryListComponent Error", error)
      );
  }

  gotoCountry(country) {
    console.log("Clicked on country", country);
    this.router.navigateByUrl("country/" + country.iso);
  }

}
