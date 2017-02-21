import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryListComponent } from './country-list.component';
import { CountryDetailComponent } from './country-detail.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CountryListComponent, CountryDetailComponent],
  exports: [CountryListComponent, CountryDetailComponent],
  bootstrap: [CountryListComponent, CountryDetailComponent],
})
export class CountryModule { }
export interface ICountry {
  callingCode: string
  englishName: string
  localName: string
  iso: string
  currency: string
}
export const COUNTRIES : ICountry[]= [{
    "callingCode": "+43",
    "englishName": "Austria",
    "localName": "Österreich",
    "iso": "AT",
    "currency": "EUR"
  }, {
    "callingCode": "+32",
    "englishName": "Belgium",
    "localName": "Belgique / België",
    "iso": "BE",
    "currency": "EUR"
  }, {
    "callingCode": "+1",
    "englishName": "Canada",
    "localName": "Canada",
    "iso": "CA",
    "currency": "CAD"
  }, {
    "callingCode": "+86",
    "englishName": "China",
    "localName": "中华人民共和国",
    "iso": "CN",
    "currency": "CNY"
  }, {
    "callingCode": "+45",
    "englishName": "Denmark",
    "localName": "Danmark",
    "iso": "DK",
    "currency": "DKK"
  }, {
    "callingCode": "+33",
    "englishName": "France",
    "localName": "France",
    "iso": "FR",
    "currency": "EUR"
  }, {
    "callingCode": "+49",
    "englishName": "Germany",
    "localName": "Deutschland",
    "iso": "DE",
    "currency": "EUR"
  }, {
    "callingCode": "+30",
    "englishName": "Greece",
    "localName": "Ελλάδα",
    "iso": "GR",
    "currency": "EUR"
  }, {
    "callingCode": "+91",
    "englishName": "India",
    "localName": "Bhārat Gaṇarājya",
    "iso": "IN",
    "currency": "INR"
  }, {
    "callingCode": "+39",
    "englishName": "Italy",
    "localName": "Italia",
    "iso": "IT",
    "currency": "EUR"
  }, {
    "callingCode": "+81",
    "englishName": "Japan",
    "localName": "日本",
    "iso": "JP",
    "currency": "JPY"
  }, {
    "callingCode": "+371",
    "englishName": "Latvia",
    "localName": "Latvija",
    "iso": "LV",
    "currency": "EUR"
  }, {
    "callingCode": "+423",
    "englishName": "Liechtenstein",
    "localName": "Liechtenstein",
    "iso": "LI",
    "currency": "EUR"
  }, {
    "callingCode": "+370",
    "englishName": "Lithuania",
    "localName": "Lietuva",
    "iso": "LT",
    "currency": "EUR"
  }, {
    "callingCode": "+352",
    "englishName": "Luxembourg",
    "localName": "Luxembourg",
    "iso": "LU",
    "currency": "EUR"
  }, {
    "callingCode": "+356",
    "englishName": "Malta",
    "localName": "Malta",
    "iso": "MT",
    "currency": "EUR"
  }, {
    "callingCode": "+377",
    "englishName": "Monaco",
    "localName": "Monaco",
    "iso": "MC",
    "currency": "EUR"
  }, {
    "callingCode": "+31",
    "englishName": "Netherlands",
    "localName": "Nederland",
    "iso": "NL",
    "currency": "EUR"
  }, {
    "callingCode": "+47",
    "englishName": "Norway",
    "localName": "Norge",
    "iso": "NO",
    "currency": "NOK"
  }, {
    "callingCode": "+48",
    "englishName": "Poland",
    "localName": "Polska",
    "iso": "PL",
    "currency": "PLN"
  }, {
    "callingCode": "+351",
    "englishName": "Portugal",
    "localName": "Portugal",
    "iso": "PT",
    "currency": "EUR"
  }, {
    "callingCode": "+421",
    "englishName": "Slovakia",
    "localName": "Slovensko",
    "iso": "SK",
    "currency": "EUR"
  }, {
    "callingCode": "+386",
    "englishName": "Slovenia",
    "localName": "Slovenija",
    "iso": "SI",
    "currency": "EUR"
  }, {
    "callingCode": "+34",
    "englishName": "Spain",
    "localName": "España",
    "iso": "ES",
    "currency": "EUR"
  }, {
    "callingCode": "+46",
    "englishName": "Sweden",
    "localName": "Sverige",
    "iso": "SE",
    "currency": "SEK"
  }, {
    "callingCode": "+41",
    "englishName": "Switzerland",
    "localName": "Schweiz / Suisse / Svizzera",
    "iso": "CH",
    "currency": "CHF"
  }, {
    "callingCode": "+44",
    "englishName": "United Kingdom",
    "localName": "United Kingdom",
    "iso": "GB",
    "currency": "GBP"
  }, {
    "callingCode": "+1",
    "englishName": "United States",
    "localName": "United States",
    "iso": "US",
    "currency": "USD"
  }];
