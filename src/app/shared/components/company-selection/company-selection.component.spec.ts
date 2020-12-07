import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanySelectionComponent } from './company-selection.component';

describe('CompanySelectionComponent', () => {
  let component: CompanySelectionComponent;
  let fixture: ComponentFixture<CompanySelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanySelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanySelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
