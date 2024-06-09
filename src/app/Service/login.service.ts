import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

const AUTH_API = 'http://localhost:8090/api/auth/';
const ClientURL = 'http://localhost:8090/api/agent/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

interface LoginResponse {
  token: string;
  client: any; // Adjust the type of client according to your API response
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private currentClient: any;

  constructor(private http: HttpClient,private router: Router) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post<LoginResponse>(AUTH_API + 'clientLogin', { username, password }, httpOptions)
      .pipe(
        tap(response => {
          this.currentClient = response.client;
          localStorage.setItem('authToken', response.token);
          localStorage.setItem('currentClient', JSON.stringify(response.client));
        })
      );
  }

  public getClient(numTel: string): Observable<any> {
    return this.http.post<any>(ClientURL + "client", numTel, httpOptions);
  }

  logout(): void {
    // Clear any stored tokens or authentication details
    localStorage.removeItem('authToken'); // Assuming you're using localStorage to store the token
    sessionStorage.removeItem('authToken'); // Remove from sessionStorage if used

    // Perform additional logout operations if necessary, like notifying the server

    // Redirect to the root URL
    this.router.navigate(['']);
  }

  getCurrentClientId(): number {
    if (!this.currentClient) {
      const clientString = localStorage.getItem('currentClient') ?? '';
      this.currentClient = JSON.parse(clientString);
    }
    return this.currentClient.id;
  }

  getCurrentClient(): any {
    if (!this.currentClient) {
      const clientString = localStorage.getItem('currentClient') ?? '';
      this.currentClient = JSON.parse(clientString);
    }
    return this.currentClient;
  }
}
