import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Observable, of } from 'rxjs/';
import { CountryService } from '../../services/country.service';
import { TournamentService } from '../../services/tournament.service';
import { Country } from '../../models/Country';
import { Sport } from '../../models/Sport';
import { Event } from '../../models/Event';
import { Tournament } from 'src/app/models/Tournament';
import { SportService } from 'src/app/services/sport.service';
import { EventService } from 'src/app/services/event.service';


@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  events:Event[];
  tournaments: Tournament[];
  tourTemp: Tournament[];
  countries:Country[];
  countriesTemp:Country[];
  countryID:number;
  sports:Sport[];
  sportID:number;
  tourID:number;
  event:Event;
  isEdit: boolean = false;


  constructor(private eventService:EventService,private tourService:TournamentService, private countryService:CountryService, private sportService:SportService) { 
    this.getAllCountries();
    this.getAllEvents();
    this.getAllSports();
    this.getAllTournaments();
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

  AddEvent(eventName: string, tourID:number): void {
    console.log(tourID);
    var eventOne: Event = { eventID: 0, eventName: eventName, tournamentID : tourID,  isEdit: false };
    
    this.eventService.addEvent((eventOne) as Event).subscribe((event:Event)=> this.events.push(eventOne));
    
  }

  removeEvent(event: Event): void {
    console.log(event);
    if(confirm("Do you want to delete" + event.eventName))
    {
      this.eventService.DeleteEvent(event).subscribe((event:Event[])=> this.events= event);
    }
    
  }

  EditEvent(event: Event, newName: string): void {
    event.eventName = newName;
    this.eventService.UpdateEvent((event) as Event).subscribe();
    
  }

  getEvent(event: number): void {
    this.event.tournamentID = event;
    console.log(event);
  }

  setEdit(event: Event): void {
    event.isEdit = !event.isEdit;
  }

}
