import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { User } from '../models/user'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl : string = "http://localhost:8080/user/"

  constructor(private http : HttpClient) { }

  getUserDeatils(userId : any) : Observable<User[]>{
    return this.http.get<User[]>(this.baseUrl + userId);
  }

}
