import { Injectable } from '@angular/core';
import { Observable, catchError, map, tap, throwError } from 'rxjs';
import { JwtAgentResponse } from '../models copy/JwtAgentResponse';
import { LoginRequest } from '../models copy/LoginRequest';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = 'http://localhost:8090/api/auth/adminSignin';


  constructor(private http: HttpClient) { }

  private currentAgent: JwtAgentResponse | null = null;


  login(loginRequest: LoginRequest): Observable<JwtAgentResponse> {
    return this.http.post<JwtAgentResponse>(this.loginUrl, loginRequest).pipe(
      tap(response => {
        this.currentAgent = response;
        localStorage.setItem('jwtToken', response.token);
      })
    );
  }

}
