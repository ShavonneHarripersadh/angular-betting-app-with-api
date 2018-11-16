import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {Sport} from '../models/Sport';
import {Event} from '../models/Event';
import {Country} from '../models/Country';
import {Tournament} from '../models/Tournament';
import {Market} from '../models/Market';
import {BetType} from '../models/BetType';
import {UserDetails} from '../models/UserDetails';
import {UserBet} from '../models/UserBet';
//import {Configuration} from '../app.constants.ts'

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class BetService {
sports:Sport[];
countries:Country[];
events:Event[];
tours:Tournament[];
markets:Market[];
bet:BetType[];
users:UserDetails[];
userBets:UserBet[];

sportUrl:string= 'http://10.1.0.129:63410/api/sport';
countryUrl:string= 'http://10.1.0.129:63410/api/country';
tourUrl:string= 'http://10.1.0.129:63410/api/tournament';
eventUrl:string= 'http://10.1.0.129:63410/api/event';
marketUrl:string= 'http://10.1.0.129:63410/api/market';
betUrl:string= 'http://10.1.0.129:63410/api/bettype';
userUrl:string= 'http://10.1.0.129:63410/api/userdetails';
userBetUrl:string= 'http://10.1.0.129:63410/api/userbet';


  constructor(private http:HttpClient) { }

  getAllSports(): Observable<Sport[]> {
    return this.http.get<Sport[]>(this.sportUrl);
  }

  getAllCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(this.countryUrl);
  }

  getAllTours(): Observable<Tournament[]> {
    return this.http.get<Tournament[]>(this.tourUrl);
  }

  getAllEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(this.eventUrl);
  }

  getAllMarkets(): Observable<Market[]> {
    return this.http.get<Market[]>(this.marketUrl);
  }
  
  getAllBet():Observable<BetType[]>{
    return this.http.get<BetType[]>(this.betUrl);
  }

  getUser(username:string, password:string):Observable<UserDetails>{
    return this.http.get<UserDetails>(`${this.userUrl}/${username},${password}`);
  }

  getAllUserBet(): Observable<UserBet[]> {
    return this.http.get<UserBet[]>(this.userBetUrl);
  }

  addUserDetail(userDetail:UserDetails):Observable<UserDetails>{
    return this.http.post<UserDetails>(this.userUrl,userDetail,httpOptions);
  }

  addUserBet(userBet:UserBet):Observable<UserBet>{
    console.log("service userID :"+userBet.stake);
    return this.http.post<UserBet>(this.userBetUrl,userBet,httpOptions);
  }

  updateUserBalance(userDetail:UserDetails):Observable<UserDetails>{
    return this.http.put<UserDetails>(`${this.userUrl}/${userDetail.userID}`, userDetail,httpOptions);
  }

}