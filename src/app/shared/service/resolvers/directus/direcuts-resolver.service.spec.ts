import { TestBed } from '@angular/core/testing';

import { DirecutsResolverService } from './direcuts-resolver.service';

describe('DirecutsResolverService', () => {
  let service: DirecutsResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DirecutsResolverService);
  });

  xit('should be created', () => {
    expect(service).toBeTruthy();
  });
});
