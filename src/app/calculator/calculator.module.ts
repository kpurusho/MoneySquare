import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorRoutingModule } from './calculator-routing.module';
import {CalculatorComponent } from './calculator/calculator.component';
import { CalculatorSidemenuComponent } from './calculator-sidemenu/calculator-sidemenu.component';
import { CalculatorHomeComponent } from './calculator-home/calculator-home.component';
import { RetirementComponent } from './retirement/retirement.component'


@NgModule({
  declarations: [CalculatorComponent, CalculatorSidemenuComponent, CalculatorHomeComponent, RetirementComponent],
  imports: [
    CalculatorRoutingModule,
    CommonModule
  ]
})
export class CalculatorModule { }
