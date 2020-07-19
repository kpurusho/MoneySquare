import { Component, OnInit } from '@angular/core';
import { Investment } from '../../model/Investment';
import { Router } from '@angular/router';
import { InvestmentService } from '../../service/investment.service';
import { Guid } from 'guid-typescript';
import { AuthStateService } from 'src/app/auth-state.service';
import { CalculatorService } from 'src/app/calculator/service/calculator.service';

@Component({
  selector: 'app-add-investment',
  templateUrl: './add-investment.component.html',
  styleUrls: ['./add-investment.component.css']
})
export class AddInvestmentComponent implements OnInit {
  title: string = 'Add Investment';
  investment: Investment = {
    id: Guid.create().toString(),
    user: this.authStateService.user.email,
    name: 'New investment',
    expectedReturns: 8,
    maturityDate: new Date(),
    balanceAmount: 1000,
    balanceAsOnDate: new Date(),
    maturityAmount: 1000,
    recurringMonthlyInvestment: 0
  };

  constructor(private router: Router,
    private investmentService: InvestmentService,
    private authStateService: AuthStateService,
    private calculatorService: CalculatorService) { }

  ngOnInit() {
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
    this.investmentService.createInvestment(this.investment)
      .subscribe(data => {
        this.router.navigate(['myinvestment/investment']);
      });
  }
}
