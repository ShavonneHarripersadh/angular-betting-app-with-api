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
import { BetType } from 'src/app/models/BetType';
import { BetService } from 'src/app/services/bet-type.service';

@Component({
  selector: 'app-bet',
  templateUrl: './bet.component.html',
  styleUrls: ['./bet.component.css']
})
export class BetComponent implements OnInit {
  bets:BetType[];
  markets:Market[];
  events:Event[];
  tournaments: Tournament[];
  tourTemp: Tournament[];
  countries:Country[];
  countriesTemp:Country[];
  marketTemp:Market[];
  betsTemp:BetType[];
  countryID:number;
  sports:Sport[];
  sportID:number;
  tourID:number;
  eventID:number;
  marketID:number;
  event:Event;
  eventsTemp:Event[];
  isEdit: boolean = false;


  constructor(private betService:BetService,private marketService:MarketService,private eventService:EventService,private tourService:TournamentService, 
    private countryService:CountryService, private sportService:SportService) { 
    this.getAllCountries();
    this.getAllEvents();
    this.getAllSports();
    this.getAllTournaments();
    this.getAllMarkets();
    this.getAllBets();
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

  getAllBets():void{
    this.betService.getAllBet().subscribe(bets=>this.bets=bets)
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

  marketToNumber(){
    this.marketID=+this.marketID;
    console.log(this.marketID);

    this.marketTemp=[];
    for (var v=0; v< this.markets.length;v++) {
      
      console.log(v);
      if(this.markets[v].eventID== this.eventID)
      {
        this.marketTemp.push(this.markets[v]);
        
      }
      
    }
  }

  eventToNumber()
  {
    this.eventID=+this.eventID;
    console.log(this.eventID);

    this.marketTemp=[];
    for (var v=0; v< this.markets.length;v++) {
      
      console.log(v);
      if(this.markets[v].eventID== this.eventID)
      {
        this.marketTemp.push(this.markets[v]);
        
      }
      
    }
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

  AddBet(description: string, pOne:number,pTwo:number,draw:number,marketID:number): void {
    pOne=+pOne;
    draw =+draw;
    pTwo=+pTwo;
    console.log(description);
    var betOne: BetType = { betTypeID: 0, description: description, priceOne : pOne, priceTwo:pTwo, draw:draw, marketID:marketID,  isEdit: false };
    
    this.betService.addBet((betOne) as BetType).subscribe((bet:BetType)=> this.bets.push(betOne));
    
  }

  removeBet(bet: BetType): void {
    console.log(bet);
    if(confirm("Do you want to delete" + bet.description))
    {
      this.betService.DeleteBet(bet).subscribe((bet:BetType[])=> this.bets= bet);
    }
    
  }

  EditBet(bet: BetType, pOne: number,pTwo:number,draw:number): void {
    bet.priceOne = pOne;
    bet.priceTwo = pTwo;
    bet.draw = draw;
    this.betService.UpdateBet((bet) as BetType).subscribe();
    
  }
  setEdit(bet: BetType): void {
    bet.isEdit = !bet.isEdit;
  }

}
