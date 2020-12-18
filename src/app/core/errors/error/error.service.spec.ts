import { TestBed } from '@angular/core/testing';

import { ErrorService } from './error.service';

describe('ErrorService', (): void => {
  let service: ErrorService;

  beforeEach((): void => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErrorService);
  });

  it('should be created', (): void => {
    expect(service).toBeTruthy();
  });
});
