import { TestBed } from '@angular/core/testing';

import { AuthStateService } from './auth-state.service';

describe('AppAuthService', () => {
  let service: AuthStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
