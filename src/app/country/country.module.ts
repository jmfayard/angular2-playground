import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryListComponent } from './country-list.component';
import { CountryDetailComponent } from './country-detail.component';
import {HttpModule} from "@angular/http";
import {CountryService} from "./country.service";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [CommonModule, HttpModule, RouterModule],
  declarations: [CountryListComponent, CountryDetailComponent],
  exports: [CountryListComponent, CountryDetailComponent],
  bootstrap: [CountryListComponent, CountryDetailComponent],
  providers: [CountryService]
})
export class CountryModule { }

