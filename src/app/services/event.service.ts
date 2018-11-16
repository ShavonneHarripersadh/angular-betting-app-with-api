import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Event} from '../models/Event';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class EventService {
events:Event[];
eventUrl: string = 'http://10.1.0.129:63410/api/event';

  constructor(private http: HttpClient) { }

  getAllEvent():Observable<Event[]>{
    return this.http.get<Event[]>(this.eventUrl);
  }

  addEvent(event:Event): Observable<Event>{
    return this.http.post<Event>(this.eventUrl, event, httpOptions);
  }

  DeleteEvent(event:Event):Observable<Event[]>{
    console.log(event);
    const id = `${this.eventUrl}/${event.eventID}`
    console.log(id);
    return this.http.delete<Event[]>(id,httpOptions);
  }

  UpdateEvent(event:Event):Observable<Event>{
    const id = `${this.eventUrl}/${event.eventID}`
    return this.http.put<Event>(id,event,httpOptions);
  }
}
