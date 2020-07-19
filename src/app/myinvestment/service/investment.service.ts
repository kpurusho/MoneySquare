import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Investment } from '../model/Investment'
import { AuthStateService } from 'src/app/auth-state.service';
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class InvestmentService {

  constructor(private http: HttpClient,
    private authStateService: AuthStateService) { }
    baseUrl: string = environment.backendBaseUrl;
    investmentsUrl: string = this.baseUrl + '/investments';

  getHeader() : HttpHeaders {
      let headers = new HttpHeaders();
      headers = headers.append("idToken", this.authStateService.user.idToken);
      return headers;
  }

  getInvestments(): Observable<Investment[]> {
    return this.http.get<Investment[]>(this.investmentsUrl + '?user=' + this.authStateService.user.email, {headers : this.getHeader()});
  }

  getInvestment(id: any): Observable<Investment> {
    return this.http.get<Investment>(this.investmentsUrl + '/' + id, {headers : this.getHeader()});
  }

  createInvestment(investment: Investment): Observable<any> {
    return this.http.post<any>(this.investmentsUrl, investment, {headers : this.getHeader()});
  }

  updateInvestment(investment: Investment): Observable<any> {
    return this.http.put<any>(this.investmentsUrl + '/' + investment.id, investment, {headers : this.getHeader()});
  }

  deleteInvestment(id: any): Observable<any> {
    return this.http.delete<Investment>(this.investmentsUrl + '/' + id, {headers : this.getHeader()});
  }
}
