import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './modules/login/login.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { AuthGuard } from './shared/service/auth/auth.guard';
import { PreloadModulesService } from './shared/service/loaders/preload/preload-modules.service';
import { ContactUsComponent } from './shared/components/contact-us/contact-us.component';
import { SignupComponent } from './modules/login/signup/signup.component';
import { ProductResolverService } from './modules/home/service/product-resolver/product-resolver.service';
import { DirecutsResolverService } from './shared/service/resolvers/directus/direcuts-resolver.service';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    resolve: { directusData: DirecutsResolverService },
  },
  {
    path: 'signup',
    component: SignupComponent,
    resolve: { directusData: DirecutsResolverService },
  },
  {
    path: 'home',
    canActivate: [AuthGuard],
    data: { preload: false },
    resolve: { directusData: DirecutsResolverService },
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  { path: 'contact-us', component: ContactUsComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadModulesService }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
