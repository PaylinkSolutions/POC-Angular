import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { Product } from 'src/app/shared/models/product';
import { APIService } from 'src/app/shared/service/api-service/api.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient, private apiService: APIService) {}

  getProducts$(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiService.productsUrl).pipe(
      tap((data): void => console.log(JSON.stringify(data)))
    );
  }
}
