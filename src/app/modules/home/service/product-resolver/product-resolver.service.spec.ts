import { TestBed } from '@angular/core/testing';

import { ProductResolverService } from './product-resolver.service';

describe('ProductResolverService', (): void => {
  let service: ProductResolverService;

  beforeEach((): void => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductResolverService);
  });
});
