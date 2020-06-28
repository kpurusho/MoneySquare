import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyinvestmentHomeComponent } from './myinvestment-home.component';

describe('MyinvestmentHomeComponent', () => {
  let component: MyinvestmentHomeComponent;
  let fixture: ComponentFixture<MyinvestmentHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyinvestmentHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyinvestmentHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
