import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Observable, of } from 'rxjs/';
import { CountryService } from '../../services/country.service';
import { SportService } from '../../services/sport.service';
import { Country } from '../../models/Country';
import { Sport } from '../../models/Sport';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  countries: Country[];
  sports:Sport[];
  sportID:number;
  country: Country;
  isEdit: boolean = false;

  constructor(private countryService:CountryService, private sportService:SportService) { this.getAllCountry(); this.getAllSports();}

  ngOnInit() {
  }

  getAllSports():void{
    this.sportService.getAllSports().subscribe(sports=> this.sports=sports);
  }

  toNumber(){
    
    this.sportID = +this.sportID;
    console.log(this.sportID);
    
  }

  getAllCountry(): void {
    this.countryService.getAllCountries().subscribe(countries => this.countries = countries);

  }

  removeCountry(country: Country): void {
    console.log(country);
    if(confirm("Do you want to delete" + country.countryName))
    {
      this.countryService.DeleteCountry(country).subscribe((country:Country[])=> this.countries= country);
    }
    
  }

  //selectedCountry = this.countries[53];

  AddCountry(countryName: string, sportID:number): void {
    console.log(sportID);
    var countryOne: Country = { countryID: 0, countryName: countryName, sportID : sportID, isEdit: false };
    
    this.countryService.addCountry((countryOne) as Country).subscribe((country:Country)=> this.countries.push(countryOne));
    
  }

  EditCountry(country: Country, newName: string): void {
    country.countryName = newName;
    this.countryService.UpdateCountry((country) as Country).subscribe();
    
  }

  getCountry(country: number): void {
    this.country.countryID = country;
    console.log(country);
  }

  setEdit(country: Country): void {
    country.isEdit = !country.isEdit;
  }
}
