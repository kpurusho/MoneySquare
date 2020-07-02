import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MyinvestmentComponent } from './myinvestment/myinvestment.component'
import { ListGoalComponent } from './goal/list-goal.component';
import { AddGoalComponent } from './goal/add-goal/add-goal.component';
import { ListInvestmentComponent } from './investment/list-investment.component';
import { MyinvestmentHomeComponent } from './myinvestment-home/myinvestment-home.component'
import { MyinvestmentSidemenuComponent } from './myinvestment-sidemenu/myinvestment-sidemenu.component'
import { EditGoalComponent } from './goal/edit-goal/edit-goal.component';
import { EditInvestmentComponent } from './investment/edit-investment/edit-investment.component';
import { AddInvestmentComponent } from './investment/add-investment/add-investment.component';
import {AuthGuard} from '../auth.guard'

const routes: Routes = [
  { 
    path: 'myinvestment', 
    component: MyinvestmentHomeComponent,
    canActivate: [ AuthGuard ], 
    children: [
      {
        path:'',
        component: MyinvestmentComponent
      },
      {
        path:'goal',
        component: ListGoalComponent
      },
      {
        path:'goal/:id',
        component: EditGoalComponent
      },
      {
        path:'add-goal',
        component: AddGoalComponent
      },
      {
        path:'investment',
        component: ListInvestmentComponent
      },
      {
        path:'investment/:id',
        component: EditInvestmentComponent
      },
      {
        path:'add-investment',
        component: AddInvestmentComponent
      },
      {
        path: '',
        outlet: 'myinvestmentsidemenu',
        component: MyinvestmentSidemenuComponent
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class MyInvestmentRoutingModule { }
