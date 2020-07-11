import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Investment } from '../model/Investment'
import { AuthStateService } from 'src/app/auth-state.service';

@Injectable({
  providedIn: 'root'
})
export class InvestmentService {

  constructor(private http: HttpClient,
    private authStateService: AuthStateService) { }
  //baseUrl: string = 'http://127.0.0.1:5000/investments';
  baseUrl: string = 'https://moneysquarebackend.azurewebsites.net/investments';
  //baseUrl: string = 'http://localhost:5000/investments';

  getHeader() : HttpHeaders {
      let headers = new HttpHeaders();
      headers = headers.append("idToken", this.authStateService.user.idToken);
      return headers;
  }

  getInvestments(): Observable<Investment[]> {
    return this.http.get<Investment[]>(this.baseUrl + '?user=' + this.authStateService.user.email, {headers : this.getHeader()});
  }

  getInvestment(id: any): Observable<Investment> {
    return this.http.get<Investment>(this.baseUrl + '/' + id, {headers : this.getHeader()});
  }

  createInvestment(investment: Investment): Observable<any> {
    return this.http.post<any>(this.baseUrl, investment);
  }

  updateInvestment(investment: Investment): Observable<any> {
    return this.http.put<any>(this.baseUrl + '/' + investment.id, investment, {headers : this.getHeader()});
  }

  deleteInvestment(id: any): Observable<any> {
    return this.http.delete<Investment>(this.baseUrl + '/' + id, {headers : this.getHeader()});
  }
}
