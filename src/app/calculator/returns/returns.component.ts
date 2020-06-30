import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../calculator.service'

@Component({
  selector: 'app-returns',
  templateUrl: './returns.component.html',
  styleUrls: ['./returns.component.css']
})
export class ReturnsComponent implements OnInit {
  title: string = "Lumpsum returns"
  _presentValue: number = 10000;
  _rateOfReturn: number = 8.0;
  _investmentDurationInYrs: number = 10;
  _numberOfCompoundInterestInYear: number = 1;
  _returns: string = "";

  constructor(private calculatorService: CalculatorService) { }

  get presentValue() : number {
    return this._presentValue;
  }
  set presentValue(value : number) {
    this._presentValue = value;
    this.calculate();
  }

  get rateOfReturn() : number {
    return this._rateOfReturn;
  }
  set rateOfReturn(value : number) {
    this._rateOfReturn = value;
    this.calculate();
  }

  get investmentDurationInYrs() : number {
    return this._investmentDurationInYrs;
  }
  set investmentDurationInYrs(value : number) {
    this._investmentDurationInYrs = value;
    this.calculate();
  }

  get numberOfCompoundInterestInYear() : number {
    return this._numberOfCompoundInterestInYear;
  }
  set numberOfCompoundInterestInYear(value : number) {
    this._numberOfCompoundInterestInYear = value;
    this.calculate();
  }

  get returns() : string {
    return this._returns;
  }
  set returns(value : string) {
    this._returns = value;
  }

  ngOnInit(): void {
    this.calculate();
  }

  calculate() : void {
    this.calculatorService.getReturns(this.presentValue, this.rateOfReturn,
      this.investmentDurationInYrs, this.numberOfCompoundInterestInYear).subscribe({
        next: result => {
          this.returns = result;
        },
        error: err =>  this.returns = err
      });
  }
}
