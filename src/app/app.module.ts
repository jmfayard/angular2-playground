import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {LoService} from "./lo.service";
import {ParseService} from "./parse.service";
import { ParsePipe } from './parse.pipe';
import {RouterModule, Routes} from "@angular/router";
import {PageNotFoundComponent} from "./404/page-not-found.component";
import {CountryModule} from "./country/country.module";
import {Module404} from "./404/404.module";
import {CountryListComponent} from "./country/country-list.component";
import {CountryDetailComponent} from "./country/country-detail.component";
import {QuoteModule} from "./quote/quote.module";
import {QuoteDetailComponent} from "./quote/quote-detail.component";
import { LoginComponent } from './user/login.component';

let appRoutes: Routes = [
  { path: 'country',
    component: CountryListComponent,
    pathMatch: 'full'
  },
  {
    path: 'quote',
    component: QuoteDetailComponent
  },
  { path: 'user/login', component: LoginComponent
  },
  { path: 'country/:id',      component: CountryDetailComponent },
  { path: '',
    redirectTo: '/country',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    ParsePipe,
    LoginComponent
  ],
  imports: [
    QuoteModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    CountryModule,
    Module404,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [LoService, ParseService],
  bootstrap: [AppComponent]
})
export class AppModule { }


