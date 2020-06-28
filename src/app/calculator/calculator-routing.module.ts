import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { CalculatorSidemenuComponent } from './calculator-sidemenu/calculator-sidemenu.component';
import { ReturnsComponent } from './returns/returns.component'
import { CalculatorHomeComponent } from './calculator-home/calculator-home.component';
import { RetirementComponent } from './retirement/retirement.component';

const routes: Routes = [
  { 
    path: 'calculator', 
    component: CalculatorHomeComponent,
    children: [
      {
        path:'',
        component: CalculatorComponent
      },
      {
        path:'returns',
        component: ReturnsComponent
      },
      {
        path:'retirement',
        component: RetirementComponent
      },
      {
        path: '',
        outlet: 'calculatorsidemenu',
        component: CalculatorSidemenuComponent
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
export class CalculatorRoutingModule { }
