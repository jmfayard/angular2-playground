# Angular Playground


# Getting started

`
$ npm install
$ npm start
$ open http://localhost:4200/
`


## Resources used

- Angular JS documentation https://angular.io/docs/ts/latest/guide/
- Typescript & AngularTS docsets in [Dash](https://kapeli.com/dash)
- Angular `BrowserModule, FormsModule, HttpModule, CountryModule, RouterModule`
- Formation videos from egghead https://egghead.io/
- CSS framework Tachyons http://tachyons.io/ 
- RX JS reactive library https://github.com/ReactiveX/rxjs
- [AngularJS plugin](https://github.com/JetBrains/intellij-plugins/tree/master/AngularJS) for Intellij/Webstorm 



## Hacking Angular CLI 

This project uses the [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0-beta.32.3.

Here is how we scafffolded the country repository

```bash
ng g module country
ng g service country/country
ng g component country/country-list
ng g component country/country-detail
```


## Other ng-cli commands


- Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
- Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.
- Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
- Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
  Before running the tests make sure you are serving the app via `ng serve`.
- To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
