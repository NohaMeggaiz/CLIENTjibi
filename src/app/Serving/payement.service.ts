import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TransactionRequest } from '../models copy/TransactionRequest';

@Injectable({
  providedIn: 'root'
})
export class PayementService {


  private apiUrl = 'http://localhost:8090/transactions/make'; // Update this URL to your actual endpoint

  constructor(private http: HttpClient) { }

 

  makeTransaction(request: TransactionRequest): Observable<TransactionRequest> {
    return this.http.post<TransactionRequest>(this.apiUrl, request);
  }
}
