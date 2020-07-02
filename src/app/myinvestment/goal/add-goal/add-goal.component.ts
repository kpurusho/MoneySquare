import { Component, OnInit } from '@angular/core';
import { Goal } from '../../model/Goal';
import { Router } from '@angular/router';
import { GoalService } from '../../service/goal.service';
import { Guid } from 'guid-typescript';
import { AuthStateService } from 'src/app/auth-state.service';

@Component({
  selector: 'app-add-goal',
  templateUrl: './add-goal.component.html',
  styleUrls: ['./add-goal.component.css']
})
export class AddGoalComponent implements OnInit {
  title:string = 'Add Goal';
  goal: Goal = { id : Guid.create().toString(),
    user: this.authStateService.user.email,
    name: 'New goal',
    targetDate : new Date(),
    targetAmount : 1000
  };

  constructor(private router: Router, 
    private goalService: GoalService,
    private authStateService: AuthStateService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.goalService.createGoal(this.goal)
      .subscribe( data => {
        this.router.navigate(['myinvestment/goal']);
      });
  }
}
