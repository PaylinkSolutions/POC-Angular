import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/shared/service/auth/auth.service';
import { LoginComponent } from './login.component';

describe('LoginComponent', (): void => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach((): void => {
    const routerStub = (): any => ({
      // tslint:disable-next-line: typedef
      navigateByUrl: () => ({}),
      // tslint:disable-next-line: typedef
      navigate: (array) => ({}),
    });
    // tslint:disable-next-line: typedef
    const authServiceStub = () => ({
      // tslint:disable-next-line: typedef
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

  xit('can load instance', (): void => {
    expect(component).toBeTruthy();
  });

  describe('login', (): void => {
    xit('makes expected calls', (): void => {
      // tslint:disable-next-line: no-angle-bracket-type-assertion
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
