import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorSidemenuComponent } from './calculator-sidemenu.component';

describe('CalculatorSidemenuComponent', () => {
  let component: CalculatorSidemenuComponent;
  let fixture: ComponentFixture<CalculatorSidemenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculatorSidemenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorSidemenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
