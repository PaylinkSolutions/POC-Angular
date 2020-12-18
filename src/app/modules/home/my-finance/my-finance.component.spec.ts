import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFinanceComponent } from './my-finance.component';

describe('MyFinanceComponent', (): void => {
  let component: MyFinanceComponent;
  let fixture: ComponentFixture<MyFinanceComponent>;

  beforeEach(async((): void => {
    TestBed.configureTestingModule({
      declarations: [MyFinanceComponent],
    }).compileComponents();
  }));

  beforeEach((): void => {
    fixture = TestBed.createComponent(MyFinanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', (): void => {
    expect(component).toBeTruthy();
  });
});
