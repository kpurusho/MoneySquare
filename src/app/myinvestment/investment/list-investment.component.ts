import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InvestmentService } from '../service/investment.service'
import { Investment } from '../model/investment';


@Component({
  selector: 'app-list-investment',
  templateUrl: './list-investment.component.html',
  styleUrls: ['./list-investment.component.css']
})
export class ListInvestmentComponent implements OnInit {
  title: string = 'Investment Details';

  investments: Investment[];

  constructor(private router: Router, private investmentService: InvestmentService) { }

  ngOnInit() {
    this.investmentService.getInvestments()
      .subscribe( data => {
        this.investments = data;
      });
  }

  deleteInvestment(investment: Investment): void {
    this.investmentService.deleteInvestment(investment.id)
      .subscribe( data => {
        this.investments = this.investments.filter(i => i !== investment);
      })
  };

  editInvestment(investment: Investment): void {
    this.router.navigate(['myinvestment/investment', investment.id]);
  };

  addInvestment(): void {
    this.router.navigate(['myinvestment/add-investment']);
  };

}
