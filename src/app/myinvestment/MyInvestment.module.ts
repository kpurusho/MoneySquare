import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoalComponent } from './goal/goal.component';
import { InvestmentComponent } from './investment/investment.component';
import { MyInvestmentRoutingModule } from './MyInvestment-routing.module';
import { MyinvestmentComponent } from './myinvestment/myinvestment.component';
import { MyinvestmentHomeComponent } from './myinvestment-home/myinvestment-home.component';
import { MyinvestmentSidemenuComponent } from './myinvestment-sidemenu/myinvestment-sidemenu.component'


@NgModule({
  declarations: [GoalComponent, InvestmentComponent, MyinvestmentComponent, MyinvestmentHomeComponent, MyinvestmentSidemenuComponent],
  imports: [
    MyInvestmentRoutingModule,
    CommonModule
  ]
})
export class MyInvestmentModule { }