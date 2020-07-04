import { Component, OnInit } from '@angular/core';
import { Goal } from '../../model/Goal';
import { Router, ActivatedRoute } from '@angular/router';
import { GoalService } from '../../service/goal.service';
import { Investment } from '../../model/Investment';
import { InvestmentService } from '../../service/investment.service';
import { CalculatorService } from 'src/app/calculator/calculator.service';
import { Observable, forkJoin } from 'rxjs';

@Component({
  selector: 'app-edit-goal',
  templateUrl: './edit-goal.component.html',
  styleUrls: ['./edit-goal.component.css']
})
export class EditGoalComponent implements OnInit {
  title: string = 'Edit Goal';
  goal: Goal;
  linkedInvestments: LinkedInvestment[];
  accumulatedAmount: number = 0;
  goalProgress: number = 0;
  projectedAmount: number = 0;
  projectedProgress: number = 0;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private goalService: GoalService,
    private investmentService: InvestmentService,
    private calculatorService: CalculatorService) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.goalService.getGoal(id).subscribe({
      next: g => {
        this.goal = g;
        this.populateLinkedInvestments();
      }
    })
  }

  get targetDate() : Date {
    return this.goal.targetDate;
  }

  set targetDate(tdate: Date) {
    this.goal.targetDate = tdate;
    this.calculateAccumulatedAmount();
    this.calculateProjectedAmount();
  }

  get targetAmount() : number {
    return this.goal.targetAmount;
  }

  set targetAmount(value:number) {
    this.goal.targetAmount = value;
    this.calculateGoalProgress();
    this.calculateProjectProgress();
  }
  
  populateLinkedInvestments() {
    this.investmentService.getInvestments().subscribe(data => {
      let investments = data;
      let localLinkedInvestments: LinkedInvestment[] = [];
      if (this.goal.linkedInvestments == undefined) this.goal.linkedInvestments = [];
      this.goal.linkedInvestments.forEach(id => {
        let i = investments.find(i => i.id == id);
        if (i != undefined)
          localLinkedInvestments.push({ linked: true, investment: i });
      })
      investments.forEach(i => {
        if (this.goal.linkedInvestments.find(id => id == i.id) == undefined) {
          localLinkedInvestments.push({ linked: false, investment: i });
        }
      })
      this.linkedInvestments = localLinkedInvestments;
      this.calculateAccumulatedAmount();
      this.calculateProjectedAmount();
    });
  }

  updateLinkedInvestments() {
    this.goal.linkedInvestments = [];
    this.linkedInvestments.forEach(li => {
      if (li.linked)
        this.goal.linkedInvestments.push(li.investment.id);
    });
  }
  
  private calculateProjectedAmount() {
    let results: Observable<string>[] = this.getAccumulatedResults(this.goal.targetDate);
    this.projectedAmount = 0;
    this.projectedProgress = 0;
    forkJoin(results).subscribe(responses => {
      responses.forEach(r => {
        this.projectedAmount += +r;
      })
      this.calculateProjectProgress();
    });
  }

  private calculateAccumulatedAmount() {
    let results: Observable<string>[] = this.getAccumulatedResults(new Date());
    this.accumulatedAmount = 0;
    this.goalProgress = 0;
    forkJoin(results).subscribe(responses => {
      responses.forEach(r => {
        this.accumulatedAmount += +r;
      })
      this.calculateGoalProgress();
    });
  }

  private getAccumulatedResults(enddate: Date) {
    let results: Observable<string>[] = [];
    this.linkedInvestments.forEach(i => {
      if (i.linked){
        let toDate:Date = enddate;
        if (this.goal.targetDate < enddate) {
          toDate = this.goal.targetDate
        }
        results.push(this.calculatorService.getReturnsBetweenDates(i.investment.balanceAmount, i.investment.expectedReturns,
          i.investment.balanceAsOnDate, toDate, 1, i.investment.recurringMonthlyInvestment));
        }
    });
    return results;
  }

  private calculateProjectProgress() {
    this.projectedProgress = Math.round(100*this.projectedAmount/this.goal.targetAmount);
  }

  private calculateGoalProgress() {
    this.goalProgress = Math.round(100*this.accumulatedAmount/this.goal.targetAmount);
  }

  onLinkedInvestmentChange(e:boolean) : void {
    this.calculateAccumulatedAmount();
    this.calculateProjectedAmount();
  }


  onSubmit() {
    this.updateLinkedInvestments();
    this.goalService.updateGoal(this.goal)
      .subscribe(data => {
        this.router.navigate(['myinvestment/goal']);
      });
  }
}

interface LinkedInvestment {
  linked: boolean;
  investment: Investment;
}
