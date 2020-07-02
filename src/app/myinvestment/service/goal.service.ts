import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Goal } from '../model/Goal'
import { AuthStateService } from 'src/app/auth-state.service';

@Injectable({
  providedIn: 'root'
})
export class GoalService {

  constructor(private http: HttpClient,
    private authStateService: AuthStateService) { }
  //baseUrl: string = 'http://127.0.0.1:5000/goals';
  baseUrl: string = 'https://moneysquarebackend.azurewebsites.net/goals';

  getGoals(): Observable<Goal[]> {
    return this.http.get<Goal[]>(this.baseUrl + '?user=' + this.authStateService.user.email);
  }

  getGoal(id: any): Observable<Goal> {
    return this.http.get<Goal>(this.baseUrl + '/' + id);
  }

  createGoal(goal: Goal): Observable<any> {
    return this.http.post<any>(this.baseUrl, goal);
  }

  updateGoal(goal: Goal): Observable<any> {
    return this.http.put<any>(this.baseUrl + '/' + goal.id, goal);
  }

  deleteGoal(id: any): Observable<any> {
    return this.http.delete<Goal>(this.baseUrl + '/' + id);
  }
}
