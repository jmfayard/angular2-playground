import {Injectable} from '@angular/core';
import {Http, Request, RequestMethod, Headers, ResponseContentType, URLSearchParams} from "@angular/http";
import {RequestArgs} from "@angular/http/src/interfaces";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';

import {Observable, ReplaySubject} from "rxjs";
import {ICountry} from "./country-interfaces";

@Injectable()
export class CountryService {

  private url = "https://gist.githubusercontent.com/jmfayard/629cd3169702bf802b180e9fe497e06f/raw/2f445470434005c49e82dafcbc328c1b5aea08b4/countries.json";

  private requestArgs: RequestArgs = {
    method: RequestMethod.Get,
    url: this.url,
    responseType: ResponseContentType.Json,
    search: new URLSearchParams("test=ok&ok=true")
  };


  private subject = new ReplaySubject();

  getCountries(): Observable<ICountry[]> {
    console.log("Service", this.subject);
    return this.subject;
  }

  constructor(private http: Http) {
    this.http.request(new Request(this.requestArgs))
      .map(response => {
        console.log("Github Response", response);
        return response.json().countries;
      })
      .startWith([])
      .subscribe(this.subject);
  }

}
