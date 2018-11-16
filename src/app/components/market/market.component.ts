import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Observable, of } from 'rxjs/';
import { CountryService } from '../../services/country.service';
import { TournamentService } from '../../services/tournament.service';
import { Country } from '../../models/Country';
import { Sport } from '../../models/Sport';
import { Event } from '../../models/Event';
import { Tournament } from 'src/app/models/Tournament';
import { SportService } from 'src/app/services/sport.service';
import { Market } from 'src/app/models/Market';
import { MarketService } from 'src/app/services/market.service';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit {
  markets:Market[];
  events:Event[];
  tournaments: Tournament[];
  tourTemp: Tournament[];
  countries:Country[];
  countriesTemp:Country[];
  countryID:number;
  sports:Sport[];
  sportID:number;
  tourID:number;
  eventID:number;
  event:Event;
  eventsTemp:Event[];
  isEdit: boolean = false;


  constructor(private marketService:MarketService,private eventService:EventService,private tourService:TournamentService, private countryService:CountryService, private sportService:SportService) { 
    this.getAllCountries();
    this.getAllEvents();
    this.getAllSports();
    this.getAllTournaments();
    this.getAllMarkets();
  }

  ngOnInit() {
  }

  getAllEvents():void{
    this.eventService.getAllEvent().subscribe(events=> this.events=events);
  }

  getAllSports():void{
    this.sportService.getAllSports().subscribe(sports=> this.sports=sports);
  }

  getAllCountries():void{
    this.countryService.getAllCountries().subscribe(countries=> this.countries=countries);
  }

  getAllTournaments():void{
    this.tourService.getAllTours().subscribe(tournaments=> this.tournaments=tournaments);
  }

  getAllMarkets():void{
    this.marketService.getAllMarket().subscribe(markets=>this.markets=markets)
  }

  sportToNumber(){    
    this.sportID = +this.sportID;
    console.log(this.sportID); 
    
    this.countriesTemp=[];
    for (var v=0; v< this.countries.length;v++) {
      
      console.log(v);
      if(this.countries[v].sportID== this.sportID)
      {
        this.countriesTemp.push(this.countries[v]);
        
      }
      
    }
  }

  tourToNumber(){
    
    this.tourID = +this.tourID;
    console.log(this.tourID);

    this.eventsTemp=[];
    for (var v=0; v< this.events.length;v++) {
      
      console.log(v);
      if(this.events[v].tournamentID== this.tourID)
      {
        this.eventsTemp.push(this.events[v]);
        
      }
      
    }
    
  }

  eventToNumber()
  {
    this.eventID=+this.eventID;
    console.log(this.eventID);
  }

  countryToNumber(){    
    this.countryID = +this.countryID;
    console.log(this.countryID); 
    
    this.tourTemp=[];
    for (var v=0; v< this.tournaments.length;v++) {
      
      console.log(v);
      if(this.tournaments[v].countryID== this.countryID)
      {
        this.tourTemp.push(this.tournaments[v]);
        
      }
      
    }
  }

  AddMarket(marketName: string, eventID:number): void {
    console.log(eventID);
    var marketOne: Market = { marketID: 0, marketName: marketName, eventID : eventID,  isEdit: false };
    
    this.marketService.addMarket((marketOne) as Market).subscribe((market:Market)=> this.markets.push(marketOne));
    
  }

  removeMarket(market: Market): void {
    console.log(market);
    if(confirm("Do you want to delete" + market.marketName))
    {
      this.marketService.DeleteMarket(market).subscribe((market:Market[])=> this.markets= market);
    }
    
  }

  EditMarket(market: Market, newName: string): void {
    market.marketName = newName;
    this.marketService.UpdateMarket((market) as Market).subscribe();
    
  }
  setEdit(event: Event): void {
    event.isEdit = !event.isEdit;
  }

}
