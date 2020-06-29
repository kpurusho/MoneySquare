import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorRoutingModule } from './calculator-routing.module';
import {CalculatorComponent } from './calculator/calculator.component';
import { CalculatorSidemenuComponent } from './calculator-sidemenu/calculator-sidemenu.component';
import { CalculatorHomeComponent } from './calculator-home/calculator-home.component';
import { RetirementComponent } from './retirement/retirement.component'
import { FormsModule } from '@angular/forms';
import { ReturnsComponent } from './returns/returns.component';


@NgModule({
  declarations: [CalculatorComponent, ReturnsComponent, CalculatorSidemenuComponent, CalculatorHomeComponent, RetirementComponent],
  imports: [
    CalculatorRoutingModule,
    CommonModule,
    FormsModule
  ]
})
export class CalculatorModule { }
