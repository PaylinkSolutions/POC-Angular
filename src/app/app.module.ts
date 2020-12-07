import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './modules/home/home.module';
import { LoginComponent } from './modules/login/login.component';
import { SignupComponent } from './modules/login/signup/signup.component';
import { SharedModule } from './modules/shared/shared.module';
import { HeaderComponent } from './shared/components/header/header.component';
import { AppInterceptor } from './core/interceptors/app.interceptor';
import { GlobalErrorHandler } from './core/errors/global-error-handler.service';
import { CompanySelectionComponent } from './shared/components/company-selection/company-selection.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    SignupComponent,

    CompanySelectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    HomeModule,
    FormsModule,
    SharedModule,
    // InMemoryWebApiModule.forRoot(ProductData, { delay: 2000 }),
  ],
  providers: [
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
    { provide: HTTP_INTERCEPTORS, useClass: AppInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
