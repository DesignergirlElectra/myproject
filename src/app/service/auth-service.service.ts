import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const AUTH_API = "http://localhost:8080/api/auth/";

const httpOptions = {
  headers: new HttpHeaders({'Content-type':'application/json'})
}
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {


  constructor(private http:HttpClient) { }

  login(username:any,password: any): Observable<any>{
    return this.http.post(AUTH_API+'signin',{username,password},httpOptions);
  }

register(username:any,email:any,password:any): Observable<any>{
  
 return this.http.post(AUTH_API+'signup',{username,email,password},httpOptions);
//  http://localhost:8080/api/auth/signup /for user/account creation
// http://localhost:8080/api/auth/signin /accessing account
}
}