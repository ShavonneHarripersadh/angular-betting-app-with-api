import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {Country} from '../models/Country';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  countries:Country[];
  countryUrl: string = 'http://10.1.0.129:63410/api/country';
  constructor(private http: HttpClient) { }

  getAllCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(this.countryUrl);
  }

  
  addCountry(country:Country): Observable<Country>{
    return this.http.post<Country>(this.countryUrl, country, httpOptions);
  }

  DeleteCountry(country:Country):Observable<Country[]>{
    console.log(country);
    const id = `${this.countryUrl}/${country.countryID}`
    console.log(id);
    return this.http.delete<Country[]>(id,httpOptions);
  }

  UpdateCountry(country:Country):Observable<Country[]>{
    const id = `${this.countryUrl}/${country.countryID}`
    return this.http.put<Country[]>(id,country,httpOptions);
  }
}
