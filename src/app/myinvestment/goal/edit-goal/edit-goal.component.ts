import { Component, OnInit } from '@angular/core';
import { Goal } from '../../model/Goal';
import { Router, ActivatedRoute } from '@angular/router';
import { GoalService } from '../../service/goal.service';

@Component({
  selector: 'app-edit-goal',
  templateUrl: './edit-goal.component.html',
  styleUrls: ['./edit-goal.component.css']
})
export class EditGoalComponent implements OnInit {
  title:string = 'Edit Goal';
  goal: Goal;
  testdate: Date = new Date();

  constructor(private route: ActivatedRoute,
    private router: Router, 
    private goalService: GoalService) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.goalService.getGoals().subscribe({
      next: prods => {
        let p = prods.filter((goal: Goal) => goal.id === id);
        this.goal = p[0];
      }
    })
  }

  onSubmit() {
    this.goalService.updateGoal(this.goal)
      .subscribe( data => {
        this.router.navigate(['myinvestment/goal']);
      });
  }
}
