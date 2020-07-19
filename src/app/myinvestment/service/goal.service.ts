import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Goal } from '../model/Goal'
import { AuthStateService } from 'src/app/auth-state.service';
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class GoalService {

  constructor(private http: HttpClient,
    private authStateService: AuthStateService) { }

  baseUrl: string = environment.backendBaseUrl;
  goalsUrl: string = this.baseUrl + '/goals';

  getHeader() : HttpHeaders {
    let headers = new HttpHeaders();
    headers = headers.append("idToken", this.authStateService.user.idToken);
    return headers;
  }

  getGoals(): Observable<Goal[]> {
    return this.http.get<Goal[]>(this.goalsUrl + '?user=' + this.authStateService.user.email, {headers : this.getHeader()});
  }

  getGoal(id: any): Observable<Goal> {
    return this.http.get<Goal>(this.goalsUrl + '/' + id, {headers : this.getHeader()});
  }

  createGoal(goal: Goal): Observable<any> {
    return this.http.post<any>(this.goalsUrl, goal, {headers : this.getHeader()});
  }

  updateGoal(goal: Goal): Observable<any> {
    return this.http.put<any>(this.goalsUrl + '/' + goal.id, goal, {headers : this.getHeader()});
  }

  deleteGoal(id: any): Observable<any> {
    return this.http.delete<Goal>(this.goalsUrl + '/' + id, {headers : this.getHeader()});
  }
}
