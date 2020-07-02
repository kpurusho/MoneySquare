import { Component, OnInit } from '@angular/core';
import { Investment } from '../../model/Investment';
import { Router } from '@angular/router';
import { InvestmentService } from '../../service/investment.service';
import { Guid } from 'guid-typescript';

@Component({
  selector: 'app-add-investment',
  templateUrl: './add-investment.component.html',
  styleUrls: ['./add-investment.component.css']
})
export class AddInvestmentComponent implements OnInit {
  title:string = 'Add Investment';
  investment: Investment = { id : Guid.create().toString(),
    user: 'karthik',
    name: 'New investment',
    expectedReturns: 8,
    maturityDate : new Date(),
    currentAmount : 1000
  };

  constructor(private router: Router, private investmentService: InvestmentService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.investmentService.createInvestment(this.investment)
      .subscribe( data => {
        this.router.navigate(['myinvestment/investment']);
      });
  }
}
