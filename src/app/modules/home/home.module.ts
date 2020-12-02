import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { ProductResolverService } from 'src/app/modules/home/service/product-resolver/product-resolver.service';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HomeComponent, ProductListComponent, ProductDetailComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent,
        resolve: { productData: ProductResolverService },
      },
      {
        path: ':id',
        component: ProductDetailComponent,
      },
    ]),
  ],
})
export class HomeModule {}
