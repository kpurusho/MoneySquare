import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Investment } from '../model/Investment'

@Injectable({
  providedIn: 'root'
})
export class InvestmentService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://127.0.0.1:5000/investments';
  //baseUrl: string = 'https://moneysquarebackend.azurewebsites.net/investments';

  getInvestments(): Observable<Investment[]> {
    return this.http.get<Investment[]>(this.baseUrl + '?user=karthik');
  }

  getInvestment(id: any): Observable<Investment> {
    return this.http.get<Investment>(this.baseUrl + '/' + id);
  }

  createInvestment(investment: Investment): Observable<any> {
    return this.http.post<any>(this.baseUrl, investment);
  }

  updateInvestment(investment: Investment): Observable<any> {
    return this.http.put<any>(this.baseUrl + '/' + investment.id, investment);
  }

  deleteInvestment(id: any): Observable<any> {
    return this.http.delete<Investment>(this.baseUrl + '/' + id);
  }
}
