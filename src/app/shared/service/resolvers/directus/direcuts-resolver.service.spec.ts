import { TestBed } from '@angular/core/testing';

import { DirecutsResolverService } from './direcuts-resolver.service';

describe('DirecutsResolverService', (): void => {
  let service: DirecutsResolverService;

  beforeEach((): void => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DirecutsResolverService);
  });

  xit('should be created', (): void => {
    expect(service).toBeTruthy();
  });
});
