import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/shared/service/auth/auth.service';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(() => {
    const routerStub = () => ({
      navigateByUrl: (redirectUrl) => ({}),
      navigate: (array) => ({}),
    });
    const authServiceStub = () => ({
      login: (userName, password) => ({}),
      redirectUrl: {},
    });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      imports: [FormsModule],
      declarations: [LoginComponent],
      providers: [
        { provide: Router, useFactory: routerStub },
        { provide: AuthService, useFactory: authServiceStub },
      ],
    });
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
  });

  xit('can load instance', () => {
    expect(component).toBeTruthy();
  });

  describe('login', () => {
    xit('makes expected calls', () => {
      const ngFormStub: NgForm = <any>{};
      const routerStub: Router = fixture.debugElement.injector.get(Router);
      const authServiceStub: AuthService = fixture.debugElement.injector.get(
        AuthService
      );
      spyOn(authServiceStub, 'login').and.callThrough();
      component.login(ngFormStub);
    });
  });
});
