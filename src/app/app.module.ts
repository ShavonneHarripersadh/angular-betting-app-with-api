import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SportService } from './services/sport.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SportsComponent } from './components/sports/sports.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { CountryComponent } from './components/country/country.component';
import { CountryService } from './services/country.service';
import { TournamentComponent } from './components/tournament/tournament.component';
import { TournamentService } from './services/tournament.service';
import { EventComponent } from './components/event/event.component';
import { EventService } from './services/event.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SportsComponent,  
    HomeComponent,
    CountryComponent,
    TournamentComponent,
    EventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [SportService, CountryService, TournamentService, EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
