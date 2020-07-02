import { Component, OnInit } from '@angular/core';
import { Investment } from '../../model/Investment';
import { Router, ActivatedRoute } from '@angular/router';
import { InvestmentService } from '../../service/investment.service';

@Component({
  selector: 'app-edit-investment',
  templateUrl: './edit-investment.component.html',
  styleUrls: ['./edit-investment.component.css']
})
export class EditInvestmentComponent implements OnInit {
  title:string = 'Edit Investment';
  investment: Investment;
  testdate: Date = new Date();

  constructor(private route: ActivatedRoute,
    private router: Router, 
    private investmentService: InvestmentService) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.investmentService.getInvestment(id).subscribe({
      next: i => {
        this.investment = i;
      }
    })
  }

  onSubmit() {
    this.investmentService.updateInvestment(this.investment)
      .subscribe( data => {
        this.router.navigate(['myinvestment/investment']);
      });
  }
}
