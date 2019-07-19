import { TestBed } from '@angular/core/testing';

import { MenuCartService } from './menu-cart.service';

describe('MenuCartService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MenuCartService = TestBed.get(MenuCartService);
    expect(service).toBeTruthy();
  });
});
