import { TestBed, async, inject } from '@angular/core/testing';

import { AutGuardGuard } from './aut-guard.guard';

describe('AutGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AutGuardGuard]
    });
  });

  it('should ...', inject([AutGuardGuard], (guard: AutGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
