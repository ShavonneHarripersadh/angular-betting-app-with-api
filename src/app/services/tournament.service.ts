import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Tournament} from '../models/Tournament';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class TournamentService {
  tours:Tournament[];
  tourUrl: string = 'http://localhost:61591/api/tournament';

  constructor(private http: HttpClient) { }

  getAllTours(): Observable<Tournament[]> {
    return this.http.get<Tournament[]>(this.tourUrl);
  }

  
  addTour(tour:Tournament): Observable<Tournament>{
    return this.http.post<Tournament>(this.tourUrl, tour, httpOptions);
  }

  DeleteTour(tour:Tournament):Observable<Tournament[]>{
    console.log(tour);
    const id = `${this.tourUrl}/${tour.tournamentID}`
    console.log(id);
    return this.http.delete<Tournament[]>(id,httpOptions);
  }

  UpdateTour(tour:Tournament):Observable<Tournament>{
    const id = `${this.tourUrl}/${tour.tournamentID}`
    return this.http.put<Tournament>(id,tour,httpOptions);
  }
}
