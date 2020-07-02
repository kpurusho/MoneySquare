import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListGoalComponent } from './goal/list-goal.component';
import { ListInvestmentComponent } from './investment/list-investment.component';
import { MyInvestmentRoutingModule } from './MyInvestment-routing.module';
import { MyinvestmentComponent } from './myinvestment/myinvestment.component';
import { MyinvestmentHomeComponent } from './myinvestment-home/myinvestment-home.component';
import { MyinvestmentSidemenuComponent } from './myinvestment-sidemenu/myinvestment-sidemenu.component';
import { AddGoalComponent } from './goal/add-goal/add-goal.component';
import { EditGoalComponent } from './goal/edit-goal/edit-goal.component'
import { FormsModule } from '@angular/forms';
import { AddInvestmentComponent } from './investment/add-investment/add-investment.component';
import { EditInvestmentComponent } from './investment/edit-investment/edit-investment.component';

@NgModule({
  declarations: [
    ListGoalComponent, 
    AddGoalComponent,
    ListInvestmentComponent, 
    MyinvestmentComponent, 
    MyinvestmentHomeComponent, 
    MyinvestmentSidemenuComponent, 
    AddGoalComponent, 
    EditGoalComponent, AddInvestmentComponent, EditInvestmentComponent],
  imports: [
    MyInvestmentRoutingModule,
    CommonModule,
    FormsModule
  ]
})
export class MyInvestmentModule { }
