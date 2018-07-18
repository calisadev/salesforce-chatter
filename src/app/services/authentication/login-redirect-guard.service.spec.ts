import { TestBed, inject } from '@angular/core/testing';

import { LoginRedirectGuardService } from './login-redirect-guard.service';

describe('LoginRedirectGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginRedirectGuardService]
    });
  });

  it('should be created', inject([LoginRedirectGuardService], (service: LoginRedirectGuardService) => {
    expect(service).toBeTruthy();
  }));
});
