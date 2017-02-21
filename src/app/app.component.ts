import {Component} from '@angular/core';
import {LoService} from "./lo.service";

@Component({
  selector: 'app-root',
  template: `
<header class="bg-black-90 fixed w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
  <nav class="f6 fw6 ttu tracked">
    <a *ngFor="let link of links" 
        class="link dim white dib mr3"
         [routerLink]="link.route"
         
        [title]="link.name"
        >
        {{link.name}}
      </a>
  </nav>
</header>

<router-outlet class="measure"></router-outlet>

`,
  styles:[`
  router-outlet {
    display:block;
    padding-top: 100px
  }
`]
})
export class AppComponent {

  title = 'Angular2 is running!';
  links : Link[] = [
    {name: 'home', route: '/'},
    {name: 'About', route: '/about'},
    {name: 'Random Quote', route: '/quote'},
    {name: 'Countries', route: '/country'},
    {name: 'France', route: '/country/fr'}
  ];


  constructor(public lo: LoService) {

  }

}

interface  Link {
  name: string,
  route: string
}
