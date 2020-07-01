import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Goal } from '../model/Goal'

@Injectable({
  providedIn: 'root'
})
export class GoalService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'https://moneysquarebackend.azurewebsites.net/goals';

  getGoals(): Observable<Goal[]> {
    return this.http.get<Goal[]>(this.baseUrl + '?user=karthik');
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
