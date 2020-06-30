import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GoalService } from '../service/goal.service'
import { Goal } from '../model/Goal';

@Component({
  selector: 'app-list-goal',
  templateUrl: './list-goal.component.html',
  styleUrls: ['./list-goal.component.css']
})
export class ListGoalComponent implements OnInit {
  title: string = 'Goal Details';

  goals: Goal[];

  constructor(private router: Router, private goalService: GoalService) { }

  ngOnInit() {
    this.goalService.getGoals()
      .subscribe( data => {
        this.goals = data;
      });
  }

  deleteGoal(goal: Goal): void {
    this.goalService.deleteGoal(goal.id)
      .subscribe( data => {
        this.goals = this.goals.filter(g => g !== goal);
      })
  };

  editGoal(goal: Goal): void {
    window.localStorage.removeItem("editGoalId");
    window.localStorage.setItem("editGoalId", goal.id.toString());
    this.router.navigate(['myinvestment/goal', goal.id]);
  };

  addGoal(): void {
    this.router.navigate(['myinvestment/add-goal']);
  };

}
