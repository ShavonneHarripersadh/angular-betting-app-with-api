import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Observable, of } from 'rxjs/';
import { SportService } from '../../services/sport.service';
import { Sport } from '../../models/Sport';
import { DefaultRouteReuseStrategy } from '@angular/router/src/route_reuse_strategy';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {
  @Input() currentSport: Sport;
  @Output() newSport: EventEmitter<Sport> = new EventEmitter();
  sports: Sport[];
  sport: Sport;
  isEdit: boolean = false;


  constructor(private sportService: SportService) {
    this.getAllSport();
    // this.AddSports(this.sportss);
  }

  ngOnInit() {

  }

  getAllSport(): void {
    this.sportService.getAllSports().subscribe(sports => this.sports = sports)

  }

  removeSport(sport: Sport): void {
    console.log(sport);
    this.sportService.DeleteSport(sport).subscribe((sport:Sport[])=> this.sports= sport);
    
    //setTimeout(() => this.getAllSport(), 50);
  }


  AddSports(sportName: string): void {
    var sportOne: Sport = { sportID: 0, sportName: sportName, isEdit: false };
    this.sportService.addSport((sportOne) as Sport).subscribe((sport:Sport)=> this.sports.push(sport) );
    console.log(sportOne);
    //setTimeout(() => this.getAllSport(), 50);
  }

  EditSport(sport: Sport, newName: string): void {
    sport.sportName = newName;
    this.sportService.UpdateSport((sport) as Sport).subscribe();
    //setTimeout(() => this.getAllSport(), 50);
  }

  getSport(sport: number): void {
    this.sport.sportID = sport;
    console.log(sport);
  }

  setEdit(sport: Sport): void {
    sport.isEdit = !sport.isEdit;
  }

}
