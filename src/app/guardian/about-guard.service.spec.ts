import { TestBed } from '@angular/core/testing';

import { AboutGuardService } from './about-guard.service';

describe('AboutGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AboutGuardService = TestBed.get(AboutGuardService);
    expect(service).toBeTruthy();
  });
});
