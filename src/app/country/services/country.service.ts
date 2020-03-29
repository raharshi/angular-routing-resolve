import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { of } from 'rxjs/observable/of';
import { Country } from '../country';

const COUNTRIES: Country[] = [
  {"countryId": "1", "name": "India", "capital": "New Delhi", "currency": "INR"},
  {"countryId": "2", "name": "China", "capital": "Beijing", "currency": "RMB"}
];
let countriesObservable = of(COUNTRIES);
let countriesToDisplayObservable =
  of(COUNTRIES.concat({"countryId": "3", "name": "UK", "capital": "London", "currency": "GBP"}));

@Injectable()
export class CountryService { 
  getCountries(): Observable<Country[]> {
      return countriesToDisplayObservable;
  }
  getCountry(id: string): Observable<Country> {
      return countriesObservable
	.map(countries => countries.find(country => country.countryId === id));
  }	
} 