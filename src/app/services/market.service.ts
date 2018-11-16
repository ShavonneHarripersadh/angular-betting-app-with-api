import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Market} from '../models/Market';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class MarketService {
markets:Market[];
marketUrl: string = 'http://10.1.0.129:63410/api/market';

  constructor(private http: HttpClient) { }

  getAllMarket():Observable<Market[]>{
    return this.http.get<Market[]>(this.marketUrl);
  }

  addMarket(market:Market): Observable<Market>{
    return this.http.post<Market>(this.marketUrl, market, httpOptions);
  }

  DeleteMarket(market:Market):Observable<Market[]>{
    console.log(event);
    const id = `${this.marketUrl}/${market.marketID}`
    console.log(id);
    return this.http.delete<Market[]>(id,httpOptions);
  }

  UpdateMarket(market:Market):Observable<Market>{
    const id = `${this.marketUrl}/${market.marketID}`
    return this.http.put<Market>(id,market,httpOptions);
  }
}
