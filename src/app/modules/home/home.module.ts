import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { ProductResolverService } from 'src/app/modules/home/service/product-resolver/product-resolver.service';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { SharedModule } from '../shared/shared.module';
import { MyFinanceComponent } from './my-finance/my-finance.component';
import { DirecutsResolverService } from 'src/app/shared/service/resolvers/directus/direcuts-resolver.service';

@NgModule({
  declarations: [
    HomeComponent,
    ProductListComponent,
    ProductDetailComponent,
    MyFinanceComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent,
        resolve: { directusData: DirecutsResolverService },
      },
      {
        path: 'my-finances',
        component: MyFinanceComponent,
        resolve: { directusData: DirecutsResolverService },
      },
    ]),
  ],
})
export class HomeModule {}
