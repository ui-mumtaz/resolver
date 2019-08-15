import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryComponent } from './country.component';
import { CountryListComponent } from './country-list/country-list.component';
import { CountryDetailResolver } from './country-detail.resolver';


const countryRoutes: Routes = [
  { path: '', component: CountryComponent, children: [
      { path: 'details/:country-id', component: CountryListComponent, 
        resolve: {countryDetails: CountryDetailResolver}
      }
  ] }
];

@NgModule({
    imports: [RouterModule.forRoot(countryRoutes)],
    exports: [RouterModule]
  })
  export class CountryRoutingModule { }