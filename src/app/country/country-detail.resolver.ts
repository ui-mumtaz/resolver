import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Country } from './country';
import { CountryService } from './services/country.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CountryDetailResolver implements Resolve<Country> {
    constructor(private countryServices: CountryService, private router: Router) { }
    resolve(route: ActivatedRouteSnapshot):Observable<Country> {
        let id = route.paramMap.get('country-id');
        console.log('Resolving for country id: ' + id);

        return this.countryServices.getCountry(id).map(country => {
            if(country) {
                return country;
            } else {
                this.router.navigate(['/country/countryList']);
                return null;
            }
        })
    }
}
