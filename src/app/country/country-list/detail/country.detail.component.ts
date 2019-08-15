import { Component, OnInit } from '@angular/core';
import { Country } from '../../country';
import { CountryService } from '../../services/country.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'country.detail',
  templateUrl: './country.detail.component.html'
})
export class CountryDetailComponent implements OnInit {
  country: Country;
  constructor(
    private countryService: CountryService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('country-id');
    alert(id);
    this.countryService.getCountry(id).subscribe(country => this.country = country);

    // this.route.paramMap.subscribe(params => {
    //   alert(params.get('country-id'));
    //   this.countryService.getCountry(params.get('country-id')).subscribe(country => this.country = country)
    // })
  }

}
