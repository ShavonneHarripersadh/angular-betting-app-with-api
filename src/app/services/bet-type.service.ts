import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {BetType} from '../models/BetType';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class BetService {
bets:BetType[];
betUrl: string = 'http://10.1.0.129:63410/api/BetType';

  constructor(private http: HttpClient) { }

  getAllBet():Observable<BetType[]>{
    return this.http.get<BetType[]>(this.betUrl);
  }

  addBet(bet:BetType): Observable<BetType>{
    return this.http.post<BetType>(this.betUrl, bet, httpOptions);
  }

  DeleteBet(bet:BetType):Observable<BetType[]>{
    console.log(bet);
    const id = `${this.betUrl}/${bet.betTypeID}`
    console.log(id);
    return this.http.delete<BetType[]>(id,httpOptions);
  }

  UpdateBet(bet:BetType):Observable<BetType>{
    const id = `${this.betUrl}/${bet.betTypeID}`
    return this.http.put<BetType>(id,event,httpOptions);
  }
}