import { TestBed } from '@angular/core/testing';

import { PersistanceService } from './persistance.service';

describe('PersistanceService', (): void => {
  let service: PersistanceService;

  beforeEach((): void => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersistanceService);
  });

  it('should be created', (): void => {
    expect(service).toBeTruthy();
  });
});
