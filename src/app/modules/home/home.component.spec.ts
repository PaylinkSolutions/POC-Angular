import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HomeComponent } from './home.component';

describe('HomeComponent', (): void => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach((): void => {
    const activatedRouteStub = (): { snapshot: { data: {} } } => ({
      snapshot: { data: {} },
    });

    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [HomeComponent],
      providers: [{ provide: ActivatedRoute, useFactory: activatedRouteStub }],
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
  });

  xit('can load instance', (): void => {
    expect(component).toBeTruthy();
  });
});
