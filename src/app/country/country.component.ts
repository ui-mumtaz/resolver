import { Component } from '@angular/core';

@Component({
  selector: 'app-country',
  template: `<h2>Welcome to Country Home</h2>
  <div>
      <router-outlet></router-outlet>
  </div>
  `
})
export class CountryComponent {

}
