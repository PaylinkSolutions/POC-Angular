import { TestBed } from '@angular/core/testing';

import { APIService } from './api.service';

describe('APIService', (): void => {
  let service: APIService;

  beforeEach((): void => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(APIService);
  });

  it('should be created', (): void => {
    expect(service).toBeTruthy();
  });
});
