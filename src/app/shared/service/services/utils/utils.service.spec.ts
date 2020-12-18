import { TestBed } from '@angular/core/testing';

import { UtilsService } from './utils.service';

describe('UtilsService', (): void => {
  let service: UtilsService;

  beforeEach((): void => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtilsService);
  });

  it('should be created', (): void => {
    expect(service).toBeTruthy();
  });
});
