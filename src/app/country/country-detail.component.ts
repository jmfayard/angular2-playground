import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {CountryService} from "./country.service";
import {ICountry} from "./country-model";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'country-detail',
  template: `

<div class="pl3 pl5-ns">
<a (click)="allCountries()" 
class="f6 link dim br-pill ph3 pv2 mb2 dib white bg-mid-gray"
>
  All Countries
</a>
<a (click)="newCountry()" 
class="f6 link dim br-pill ph3 pv2 mb2 dib white bg-mid-gray"
>
  Random Country
</a>
</div>

<div *ngIf="country==null" class="pa3 pa5-ns">Loading....</div>

<div
*ngIf="country!=null" 
class="pl3 pl5-ns">
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

  private countries: ICountry[] = null;

  constructor(
    private route: ActivatedRoute,
    private service: CountryService,
    private router: Router
  ) {
    let iso = "FR";
    this.route.params
      .map((params: Params) => params['iso'])
      .flatMap((iso: string) =>
        this.service.getCountries().map(list => this.onNext(list, iso))
      ).subscribe(console.log, console.error);

  }

  onNext(countries: ICountry[], iso: string) {
    console.log(`onNext, iso=${iso}`);
    this.countries = countries;
    const search = countries.filter(c => c.iso == iso.toUpperCase());
    if (search != null) {
      this.country = search[0];
    }
    return {iso, countries};
  }

  newCountry() {
    const size = this.countries.length;
    if (size === 0) {
      return;
    }
    const random = Math.floor(size * Math.random());
    return this.onNext(this.countries, this.countries[random].iso);
  }

  allCountries() {
    this.router.navigateByUrl('country');
  }

  ngOnInit() {

  }

}
