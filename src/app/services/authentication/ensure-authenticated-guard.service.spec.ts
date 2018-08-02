import { TestBed, inject } from '@angular/core/testing';

import { EnsureAuthenticatedGuardService } from './ensure-authenticated-guard.service';

describe('EnsureAuthenticatedGuardService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [EnsureAuthenticatedGuardService]
        });
    });

    it('should be created', inject([EnsureAuthenticatedGuardService], (service: EnsureAuthenticatedGuardService) => {
        expect(service).toBeTruthy();
    }));
});
