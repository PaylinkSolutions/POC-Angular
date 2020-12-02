import { TestBed } from '@angular/core/testing';

import { GlobalErrorHandler } from './global-error-handler.service';

describe('GlobalErrorHandlerService', (): void => {
  let service: GlobalErrorHandler;

  beforeEach((): void => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalErrorHandler);
  });

  it('should be created', (): void => {
    expect(service).toBeTruthy();
  });
});
