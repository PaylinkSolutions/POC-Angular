import { TestBed } from '@angular/core/testing';

import { PreloadModulesService } from './preload-modules.service';

describe('PreloadModulesService', () => {
  let service: PreloadModulesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreloadModulesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
