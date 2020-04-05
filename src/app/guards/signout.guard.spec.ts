import { TestBed, async, inject } from '@angular/core/testing';

import { SignoutGuard } from './signout.guard';

describe('SignoutGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SignoutGuard]
    });
  });

  it('should ...', inject([SignoutGuard], (guard: SignoutGuard) => {
    expect(guard).toBeTruthy();
  }));
});
