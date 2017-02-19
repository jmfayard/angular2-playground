import { Component } from '@angular/core';
import {LoService} from "./lo.service";
import {ParseUser} from "./parse-user";

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `
<h1>{{title}}</h1>
<p>Found {{lo.size()}} numbers {{lo.numbers | json}}</p>
<br/>
<p>My user is {{ user | parse }}</p>
`
})
export class AppComponent {


  constructor(public lo: LoService) {

  }

  user = new ParseUser();
  title = 'app works!';
}
