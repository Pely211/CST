import { TestBed } from '@angular/core/testing';

import { RpgGuardGuard } from './rpg-guard.guard';

describe('RpgGuardGuard', () => {
  let guard: RpgGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RpgGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
