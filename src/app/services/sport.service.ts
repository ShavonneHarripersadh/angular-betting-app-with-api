import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {Sport} from '../models/Sport';
//import {Configuration} from '../app.constants.ts'

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}


@Injectable(
 
)
export class SportService {
  sports:Sport[];
  sportUrl: string = 'http://localhost:61591/api/sport';
  constructor(private http: HttpClient) {}

  getAllSports(): Observable<Sport[]> {
    return this.http.get<Sport[]>(this.sportUrl);
  }

  
  addSport(sport:Sport): Observable<Sport>{
    return this.http.post<Sport>(this.sportUrl, sport, httpOptions);
  }

  DeleteSport(sport:Sport):Observable<Sport[]>{
    console.log(sport);
    const id = `${this.sportUrl}/${sport.sportID}`
    console.log(id);
    return this.http.delete<Sport[]>(id,httpOptions);
  }

  UpdateSport(sport:Sport):Observable<Sport[]>{
    const id = `${this.sportUrl}/${sport.sportID}`
    return this.http.put<Sport[]>(id,sport,httpOptions);
  }
}
