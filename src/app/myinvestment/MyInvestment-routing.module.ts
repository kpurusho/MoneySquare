import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InvestmentComponent } from './investment/investment.component'
import { MyinvestmentComponent } from './myinvestment/myinvestment.component'

const routes: Routes = [
  { path: 'myinvestment', component: MyinvestmentComponent}
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
