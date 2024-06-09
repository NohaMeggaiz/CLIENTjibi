import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';



const AUTH_API = 'http://localhost:8090/api/auth/';
const ClientURL = 'http://localhost:8090/api/agent/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string):Observable<any> {
    return this.http.post(AUTH_API + 'clientLogin', {
      username,
      password
    }, httpOptions);
  }

  //get client bu numTel
  public getClient(
    numTel:string,
  ){

    return this.http.post<any>(ClientURL+"client",
      numTel,
      httpOptions)
  }

}