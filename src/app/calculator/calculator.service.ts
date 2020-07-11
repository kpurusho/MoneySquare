import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  //private calculatorUrl:string = 'https://moneysquarecalculator.azurewebsites.net/api/lumpsumreturns/'
  private calculatorUrl:string = 'https://moneysquarebackend.azurewebsites.net/lumpsumreturns'
  //private calculatorUrl:string = 'http://localhost:5000/lumpsumreturns'
  constructor(private http: HttpClient) { }

  getReturns(presentValue: number, rateOfReturn: number,
    investmentDurationInYears: number, numberOfCompoundInterestInYear: number,
    recurringMonthlyInvestment: number = 0) : Observable<string> {
      let httpparams = new HttpParams();
      //httpparams = httpparams.append('code', 'RcR8PAFtwgyoDIasjR0e9LvG0Fkt04rDJ49imtf8NWmiE3YEpl1NfA==');
      //httpparams = httpparams.append('clientId', 'apim-MoneySquareCalculator');
      httpparams = httpparams.append('presentValue', presentValue.toString());
      httpparams = httpparams.append('rateOfReturn', rateOfReturn.toString());
      httpparams = httpparams.append('investmentDurationInYears', investmentDurationInYears.toString());
      httpparams = httpparams.append('numberOfCompoundInterestInYear', numberOfCompoundInterestInYear.toString());
      httpparams = httpparams.append('recurringMonthlyInvestment', recurringMonthlyInvestment.toString());
      
      return this.http.get<string>(this.calculatorUrl, {params: httpparams}).pipe(
        tap(data => console.log('From httpClient: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }
  
  getReturnsBetweenDates(presentValue: number, rateOfReturn: number,
    startDate: Date, endDate:Date, numberOfCompoundInterestInYear: number,
    recurringMonthlyInvestment: number = 0) : Observable<string> {
      let investmentDurationInYrs = this.diffYears(endDate, startDate);
      return this.getReturns(presentValue, rateOfReturn, investmentDurationInYrs, numberOfCompoundInterestInYear,recurringMonthlyInvestment);
  }

  diffYears(dt2: Date, dt1: Date): number {
    dt2 = new Date(dt2);
    dt1 = new Date(dt1);
    var diff = (dt2.getTime() - dt1.getTime()) / 1000;
    diff /= (60 * 60 * 24);
    return diff / 365.25;
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
