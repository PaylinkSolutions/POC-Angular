import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { APIService } from 'src/app/shared/service/api-service/api.service';
import { ProductService } from './product.service';

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(() => {
    const aPIServiceStub = () => ({ productsUrl: {} });
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        ProductService,
        { provide: APIService, useFactory: aPIServiceStub }
      ]
    });
    service = TestBed.inject(ProductService);
  });

  xit('can load instance', () => {
    expect(service).toBeTruthy();
  });

  describe('getProducts$', () => {
    xit('makes expected calls', () => {
      const httpTestingController = TestBed.inject(HttpTestingController);
      service.getProducts$().subscribe(res => {
        expect(res).toEqual([]);
      });
      const req = httpTestingController.expectOne('HTTP_ROUTE_GOES_HERE');
      expect(req.request.method).toEqual('GET');
      req.flush([]);
      httpTestingController.verify();
    });
  });
});
