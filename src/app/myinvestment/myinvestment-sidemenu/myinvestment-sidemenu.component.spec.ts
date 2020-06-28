import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyinvestmentSidemenuComponent } from './myinvestment-sidemenu.component';

describe('MyinvestmentSidemenuComponent', () => {
  let component: MyinvestmentSidemenuComponent;
  let fixture: ComponentFixture<MyinvestmentSidemenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyinvestmentSidemenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyinvestmentSidemenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
