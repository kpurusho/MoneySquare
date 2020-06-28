import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MyinvestmentComponent } from './myinvestment/myinvestment.component'
import { GoalComponent } from './goal/goal.component';
import { InvestmentComponent } from './investment/investment.component';
import { MyinvestmentHomeComponent } from './myinvestment-home/myinvestment-home.component'
import { MyinvestmentSidemenuComponent } from './myinvestment-sidemenu/myinvestment-sidemenu.component'

const routes: Routes = [
  { 
    path: 'myinvestment', 
    component: MyinvestmentHomeComponent,
    children: [
      {
        path:'',
        component: MyinvestmentComponent
      },
      {
        path:'goal',
        component: GoalComponent
      },
      {
        path:'investment',
        component: InvestmentComponent
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
