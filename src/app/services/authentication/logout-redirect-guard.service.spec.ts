import { TestBed, inject } from '@angular/core/testing';

import { LogoutRedirectGuardService } from './logout-redirect-guard.service';

describe('LogoutRedirectGuardService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [LogoutRedirectGuardService]
        });
    });

    it('should be created', inject([LogoutRedirectGuardService], (service: LogoutRedirectGuardService) => {
        expect(service).toBeTruthy();
    }));
});
