import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoalComponent } from './goal/goal.component';
import { InvestmentComponent } from './investment/investment.component';
import {MyInvestmentRoutingModule} from './myinvestment-routing.module';
import { MyinvestmentComponent } from './myinvestment/myinvestment.component'


@NgModule({
  declarations: [GoalComponent, InvestmentComponent, MyinvestmentComponent],
  imports: [
    MyInvestmentRoutingModule,
    CommonModule
  ]
})
export class MyInvestmentModule { }
