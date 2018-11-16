import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs/';
import { Country } from '../../models/Country';
import { Sport } from '../../models/Sport';
import { Event } from '../../models/Event';
import { Market } from '../../models/Market';
import { UserDetails } from '../../models/UserDetails';
import { UserBet } from '../../models/UserBet';
import { BetType } from '../../models/BetType';
import { Tournament } from 'src/app/models/Tournament';
import { BetService } from 'src/app/services/bet.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { createError } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-betlist',
  templateUrl: './betlist.component.html',
  styleUrls: ['./betlist.component.css']
})
export class BetlistComponent implements OnInit {
  sports: Sport[];
  countries: Country[];
  tournaments: Tournament[];
  events: Event[];
  markets: Market[];
  bets: BetType[];
  userDetails: UserDetails[];
  countriesTemp: Country[];
  sportID: number;
  tourTemp: Tournament[];
  eventsTemp: Event[];
  marketsTemp: Market[];
  betsTemp: BetType[];
  num: number;
  isLogin: boolean = false;
  create: boolean = false;
  username: string;
  userID: number;
  userBets: UserBet[];
  userBet: UserBet;
  userDetail: UserDetails;
  enterStake: boolean;
  odds: number;
  stake: number;
  betID: number;




  constructor(private betService: BetService) {
    this.getAllCountries();
    this.getAllEvents();
    this.getAllSports();
    this.getAllTournaments();
    this.getAllMarkets();
    this.getAllBets();

  }

  ngOnInit() {
  }

  Login(username: string, password: string): void {


    this.betService.getUser(username, password).subscribe(userDetail => this.userDetail = userDetail);
    if (this.userDetail != null) {
      console.log(this.userDetail);
      this.userID = this.userDetail.userID;
      this.userDetail.username = username;
      this.isLogin = !this.isLogin;

    }
  }

  AddStake(odds: number, betID: number) {
    this.odds = odds;
    this.betID = betID;
    this.enterStake = !this.enterStake;
  }

  AddBet(stake: number) {
    stake = +stake;

    console.log("Stake: " + stake);
    if (this.userDetail == null) {
      alert("You are not logged in");
    }
    else (confirm("Do you want to add this bet?"))
    {
      this.stake = stake;
      var pay: number = stake + stake * this.odds;
      var userBetsOne: UserBet = { userBetID: 0, userID: this.userDetail.userID, betTypeID: this.betID, stake: this.stake, potentialPayout: pay, result: false };
      console.log(this.userDetail.userID + "   User ID");
      console.log(this.betID + "   Bet ID");
      if (this.userDetail.balance < stake) {
        alert("Insufficient Funds");
      }
      else if (stake < 0) {
        alert("Cannot take a negative stake");
      }

      else {
        this.betService.addUserBet((userBetsOne) as UserBet).subscribe((userBet) => {
          this.userBet = userBetsOne
        });
        this.enterStake = !this.enterStake;
        alert("Bet Taken!! \nStake: R" + userBetsOne.stake + "\nPotentialPayout: R" + userBetsOne.potentialPayout);
        this.userDetail.balance -= stake;
        var userDetailOne: UserDetails = {
          userID: this.userDetail.userID, username: this.userDetail.username
          , password: this.userDetail.password, balance: this.userDetail.balance
        }
        this.betService.updateUserBalance((this.userDetail) as UserDetails).subscribe((userDetail) => {
          this.userDetail = userDetailOne
        });
      }
    }
  }
  logout(): void {
    this.userDetail = null;
    this.isLogin = !this.isLogin;
  }

  AddUser(username: string, password: string): void {
    if (username.length < 2 || password.length < 2) {
      alert("Username or password does not meet minimum requirements");
    }
    else {
      var userDetailOne: UserDetails = { userID: 0, username: username, password: password, balance: 100 };

      this.betService.addUserDetail((userDetailOne) as UserDetails).subscribe((userDetail) => {
        this.userDetail = userDetail
      });
      this.create = !this.create;
      this.Login(username, password);
    }
  }

  getAllEvents(): void {
    this.betService.getAllEvents().subscribe(events => this.events = events);
  }

  getAllSports(): void {
    this.betService.getAllSports().subscribe(sports => this.sports = sports);
  }

  getAllCountries(): void {
    this.betService.getAllCountries().subscribe(countries => this.countries = countries);
  }

  getAllTournaments(): void {
    this.betService.getAllTours().subscribe(tournaments => this.tournaments = tournaments);
  }

  getAllMarkets(): void {
    this.betService.getAllMarkets().subscribe(markets => this.markets = markets);
  }

  getAllBets(): void {
    this.betService.getAllBet().subscribe(bets => this.bets = bets);
  }

  countryList(i: number, sportID: number): void {
    i = +i;
    sportID = +sportID;
    this.countriesTemp = [];

    for (var v = 0; v < this.countries.length; v++) {


      if (this.countries[v].sportID == sportID) {
        console.log(this.countries[v]);
        console.log(i);
        this.countriesTemp.push(this.countries[v]);

      }

    }
  }

  getSportID(index: number): number {
    console.log(index)
    this.num = this.sports[index].sportID;
    return this.num;
  }

  tourList(i: number, countryID: number): void {
    i = +i;
    countryID = +countryID;
    this.tourTemp = [];
    for (var v = 0; v < this.tournaments.length; v++) {
      console.log(this.tournaments[v]);

      if (this.tournaments[v].countryID == countryID) {

        this.tourTemp.push(this.tournaments[v]);

      }

    }
  }

  eventList(i: number, tourID: number): void {
    i = +i;
    tourID = +tourID;
    this.eventsTemp = [];
    for (var v = 0; v < this.events.length; v++) {


      if (this.events[v].tournamentID == tourID) {
        console.log(this.events[v]);
        this.eventsTemp.push(this.events[v]);

      }

    }
  }

  marketList(i: number, eventID: number): void {
    i = +i;
    eventID = eventID;
    this.marketsTemp = [];
    for (var v = 0; v < this.markets.length; v++) {
      console.log(this.markets[v]);

      if (this.markets[v].eventID == eventID) {

        this.marketsTemp.push(this.markets[v]);

      }

    }
  }

  betList(i: number, marketID: number) {
    i = +i;
    console.log(marketID);
    marketID = marketID;

    this.betsTemp = [];
    for (var v = 0; v < this.bets.length; v++) {
      console.log(this.bets[v].priceOne);
      //console.log(this.bets[v].marketID);
      if (this.bets[v].marketID == marketID) {

        this.betsTemp.push(this.bets[v]);


      }

    }
  }

  getMarketID(marketID: number): void {
    console.log(marketID);
    this.num = marketID;
  }



}
