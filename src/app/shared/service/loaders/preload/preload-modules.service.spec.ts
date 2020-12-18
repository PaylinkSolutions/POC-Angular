import { TestBed } from '@angular/core/testing';

import { PreloadModulesService } from './preload-modules.service';

describe('PreloadModulesService', (): void => {
  let service: PreloadModulesService;

  beforeEach((): void => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreloadModulesService);
  });

  it('should be created', (): void => {
    expect(service).toBeTruthy();
  });
});
