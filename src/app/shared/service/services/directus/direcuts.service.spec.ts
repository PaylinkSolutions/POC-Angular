import { TestBed } from '@angular/core/testing';

import { DirecutsService } from './direcuts.service';

describe('DirecutsService', (): void => {
  let service: DirecutsService;

  beforeEach((): void => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DirecutsService);
  });

  xit('should be created', (): void => {
    expect(service).toBeTruthy();
  });
});
