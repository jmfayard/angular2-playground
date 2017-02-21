import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
<main class="pa4 black-80">
  <form class="measure center" 
  #formRef="ngForm"
  (ngSubmit)="onSubmit(formRef.value)"
  >
    <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
      <legend class="f4 fw6 ph0 mh0">Sign In</legend>
      <div class="mt3">
        <label class="db fw6 lh-copy f6" for="email">Email</label>
        <input 
        class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
        type="email" 
        name="email"  id="email"
        required
        minlength="6"
        [(ngModel)]="email"
        #emailRef="ngModel"
        
        >
      </div>
      <div class="mv3">
        <label class="db fw6 lh-copy f6" for="password">Password</label>
        <input class="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" 
          name="password"  id="password"
          ngModel
          >
      </div>
      <label class="pa0 ma0 lh-copy f6 pointer"><input type="checkbox"> Remember me</label>
    </fieldset>
    <div class="">
      <input class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in">
    </div>
    <div class="lh-copy mt3">
      <a href="#0" class="f6 link dim black db">Sign up</a>
      <a href="#0" class="f6 link dim black db">Forgot your password?</a>
    </div>
  </form>
  <hr>
  <ul>
  <li *ngIf="emailRef.errors">errors : {{ emailRef.errors | json }} </li>
  
  <li *ngIf="formRef.value">Form value : {{ formRef.value | json }} </li>
  
  </ul>
</main>
  `,
  styles: [`
  input.ng-invalid {
    color: red;
    border-style: dotted;
     border-bottom-color: red;
  }
`]
})
export class LoginComponent implements OnInit {
  email = "jmfayard@gmail.com";
  password = "";
  constructor() { }

  ngOnInit() {
  }

  onSubmit(value) {
    console.table(value);
  }

}
