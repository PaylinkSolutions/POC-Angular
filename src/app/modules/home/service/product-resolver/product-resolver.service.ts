import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';

import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Product } from 'src/app/shared/models/product';
import { ProductService } from '../product-service/product.service';

@Injectable({
  providedIn: 'root',
})
export class ProductResolverService implements Resolve<Product[]> {
  constructor(private productService: ProductService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Product[]> {
    return this.productService.getProducts$().pipe(
      map((data: Product[]): Product[] => data),
      catchError(
        (error: Error): Observable<any> => {
          const product = [] as Product[];

          return of(product);
        }
      )
    );
  }
}
