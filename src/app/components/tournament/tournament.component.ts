import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Observable, of } from 'rxjs/';
import { CountryService } from '../../services/country.service';
import { TournamentService } from '../../services/tournament.service';
import { Country } from '../../models/Country';
import { Sport } from '../../models/Sport';
import { Tournament } from 'src/app/models/Tournament';
import { SportService } from 'src/app/services/sport.service';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.css']
})
export class TournamentComponent implements OnInit {
  tournaments: Tournament[];
  countries:Country[];
  countriesTemp:Country[];
  countryID:number;
  sports:Sport[];
  sportID:number;
  tournament: Tournament;
  isEdit: boolean = false;

  constructor(private tourService:TournamentService, private countryService:CountryService, private sportService:SportService) { 
    this.getAllTournaments();
    this.getAllSports();
    this.getAllCountry();
  }

  ngOnInit() {
  }

  getAllTournaments() :void 
  {
    this.tourService.getAllTours().subscribe(tournaments=> this.tournaments=tournaments);
  }
  getAllCountry() :void 
  {
    this.countryService.getAllCountries().subscribe(countries=> this.countries=countries);
  }
  getAllSports() :void 
  {
    this.sportService.getAllSports().subscribe(sports=> this.sports=sports);
  }

  countryToNumber(){
    
    this.countryID = +this.countryID;
    console.log(this.countryID);
    
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

  removeTournament(tournament: Tournament): void {
    console.log(tournament);
    if(confirm("Do you want to delete" + tournament.tournamentName))
    {
      this.tourService.DeleteTour(tournament).subscribe((tournament:Tournament[])=> this.tournaments= tournament);
    }
    
  }



  AddTournament(tournamentName: string, countryID:number): void {
    console.log(countryID);
    var tourOne: Tournament = { tournamentID: 0, tournamentName: tournamentName, countryID : countryID,  isEdit: false };
    
    this.tourService.addTour((tourOne) as Tournament).subscribe((tournament:Tournament)=> this.tournaments.push(tourOne));
    
  }

  EditTournament(tournament: Tournament, newName: string): void {
    tournament.tournamentName = newName;
    this.tourService.UpdateTour((tournament) as Tournament).subscribe();
    
  }

  getTournament(tournament: number): void {
    this.tournament.tournamentID = tournament;
    console.log(tournament);
  }

  setEdit(tournament: Tournament): void {
    tournament.isEdit = !tournament.isEdit;
  }



}
