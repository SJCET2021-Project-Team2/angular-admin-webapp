import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

import { User } from '../models/user'
import { Logs } from '../models/logs'
import { Premises } from '../models/premises'
import { Alert } from '../models/alert'




const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl_USER : string = "https://virus-tracker-system-api.herokuapp.com/user/"
  baseUrl_PREMISES : string = "https://virus-tracker-system-api.herokuapp.com/premises/"
  baseUrl_LOGS : string = "https://virus-tracker-system-api.herokuapp.com/logs/users/exposed/"

  constructor(private http : HttpClient) { }

  getUserDeatils(userId : any) : Observable<User[]>{
    return this.http.get<User[]>(this.baseUrl_USER + userId);
  }

  getPremisesDeatils(premisesId : any) : Observable<Premises[]>{
    return this.http.get<Premises[]>(this.baseUrl_PREMISES + premisesId);
  }

  getUserLogs(userId : any): Observable<Logs[]>{
    return this.http.get<Logs[]>(this.baseUrl_LOGS + userId);
  }

  alertUsers(alert : Alert): Observable<Alert>{
    const baseUrl_ALERT = "https://virus-tracker-system-api.herokuapp.com/alert/users/mail"
    // const baseUrl_ALERT = "http://localhost:8080/alert/users/mail"
    return this.http.post<Alert>(baseUrl_ALERT, alert, httpOptions);
  }
}
