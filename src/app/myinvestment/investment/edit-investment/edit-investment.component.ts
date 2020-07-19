import { Component, OnInit } from '@angular/core';
import { Investment } from '../../model/Investment';
import { Router, ActivatedRoute } from '@angular/router';
import { InvestmentService } from '../../service/investment.service';
import { CalculatorService } from 'src/app/calculator/service/calculator.service';

@Component({
  selector: 'app-edit-investment',
  templateUrl: './edit-investment.component.html',
  styleUrls: ['./edit-investment.component.css']
})
export class EditInvestmentComponent implements OnInit {
  title: string = 'Edit Investment';
  investment: Investment;
  testdate: Date = new Date();

  constructor(private route: ActivatedRoute,
    private router: Router,
    private investmentService: InvestmentService,
    private calculatorService: CalculatorService) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.investmentService.getInvestment(id).subscribe({
      next: i => {
        this.investment = i;
      }
    })
  }
  get balanceAmount(): number {
    return this.investment.balanceAmount;
  }
  set balanceAmount(value: number) {
    this.investment.balanceAmount = value;
    this.calculate();
  }
  
  get recurringMonthlyInvestment(): number {
    return this.investment.recurringMonthlyInvestment;
  }
  set recurringMonthlyInvestment(value: number) {
    this.investment.recurringMonthlyInvestment = value;
    this.calculate();
  }

  get expectedReturns(): number {
    return this.investment.expectedReturns;
  }
  set expectedReturns(value: number) {
    this.investment.expectedReturns = value;
    this.calculate();
  }

  get balanceAsOnDate(): Date {
    return this.investment.balanceAsOnDate;
  }
  set balanceAsOnDate(value: Date) {
    this.investment.balanceAsOnDate = value;
    this.calculate();
  }

  get maturityDate(): Date {
    return this.investment.maturityDate;
  }
  set maturityDate(value: Date) {
    this.investment.maturityDate = value;
    this.calculate();
  }

  get maturityAmount(): number {
    return this.investment.maturityAmount;
  }
  set maturityAmount(value: number) {
    this.investment.maturityAmount = value;
  }

  calculate(): void {
    this.calculatorService.getReturnsBetweenDates(this.balanceAmount, this.expectedReturns,
      this.balanceAsOnDate, this.maturityDate, 1, this.recurringMonthlyInvestment).subscribe({
        next: result => {
          this.maturityAmount = +result;
        },
        error: err => alert('failed to compute returns')
      });
  }

  onSubmit() {
    this.investmentService.updateInvestment(this.investment)
      .subscribe(data => {
        this.router.navigate(['myinvestment/investment']);
      });
  }
}
