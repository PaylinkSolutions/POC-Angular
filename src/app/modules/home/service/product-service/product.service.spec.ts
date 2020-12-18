import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { APIService } from 'src/app/shared/service/api-service/api.service';
import { ProductService } from './product.service';

describe('ProductService', (): void => {
  let service: ProductService;

  beforeEach((): void => {
    const aPIServiceStub = (): { productsUrl: {} } => ({ productsUrl: {} });

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        ProductService,
        { provide: APIService, useFactory: aPIServiceStub },
      ],
    });
    service = TestBed.inject(ProductService);
  });

  it('can load instance', (): void => {
    expect(service).toBe(service);
  });

  describe('getProducts$', (): void => {
    xit('makes expected calls', (): void => {
      const httpTestingController = TestBed.inject(HttpTestingController);

      service.getProducts$().subscribe((res): void => {
        expect(res).toEqual([]);
      });
      const req = httpTestingController.expectOne('HTTP_ROUTE_GOES_HERE');

      expect(req.request.method).toEqual('GET');
      req.flush([]);
      httpTestingController.verify();
    });
  });
});
