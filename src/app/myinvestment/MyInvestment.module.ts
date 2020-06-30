import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListGoalComponent } from './goal/list-goal.component';
import { InvestmentComponent } from './investment/investment.component';
import { MyInvestmentRoutingModule } from './MyInvestment-routing.module';
import { MyinvestmentComponent } from './myinvestment/myinvestment.component';
import { MyinvestmentHomeComponent } from './myinvestment-home/myinvestment-home.component';
import { MyinvestmentSidemenuComponent } from './myinvestment-sidemenu/myinvestment-sidemenu.component';
import { AddGoalComponent } from './goal/add-goal/add-goal.component';
import { EditGoalComponent } from './goal/edit-goal/edit-goal.component'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ListGoalComponent, 
    AddGoalComponent,
    InvestmentComponent, 
    MyinvestmentComponent, 
    MyinvestmentHomeComponent, 
    MyinvestmentSidemenuComponent, 
    AddGoalComponent, 
    EditGoalComponent],
  imports: [
    MyInvestmentRoutingModule,
    CommonModule,
    FormsModule
  ]
})
export class MyInvestmentModule { }
