import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanySelectionComponent } from './company-selection.component';

describe('CompanySelectionComponent', (): void => {
  let component: CompanySelectionComponent;
  let fixture: ComponentFixture<CompanySelectionComponent>;

  beforeEach(async((): void => {
    TestBed.configureTestingModule({
      declarations: [CompanySelectionComponent],
    }).compileComponents();
  }));

  beforeEach((): void => {
    fixture = TestBed.createComponent(CompanySelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', (): void => {
    expect(component).toBeTruthy();
  });
});
