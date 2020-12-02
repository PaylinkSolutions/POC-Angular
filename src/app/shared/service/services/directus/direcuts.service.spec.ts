import { TestBed } from '@angular/core/testing';

import { DirecutsService } from './direcuts.service';

describe('DirecutsService', () => {
  let service: DirecutsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DirecutsService);
  });

  xit('should be created', () => {
    expect(service).toBeTruthy();
  });
});
