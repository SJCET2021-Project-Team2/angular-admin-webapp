import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Logs } from '../models/logs'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogsService {

  baseUrl : string = "http://localhost:8080/logs/all"

  constructor(private http : HttpClient) { }

  getUserLogs(): Observable<Logs[]>{
    return this.http.get<Logs[]>(this.baseUrl);
  }

}
