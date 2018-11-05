import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SportsComponent } from './components/sports/sports.component';
import { HomeComponent } from './components/home/home.component';
import { CountryComponent } from './components/country/country.component';
import { TournamentComponent } from './components/tournament/tournament.component';
import { EventComponent } from './components/event/event.component';

const routes: Routes = [{path:'home',component:HomeComponent},
{path:'sports',component:SportsComponent},
{path:'country',component:CountryComponent},
{path:'tournament',component:TournamentComponent},
{path:'event',component:EventComponent}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
