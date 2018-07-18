import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OAuthService  } from '../../salesforce/services/oauth.service';
import { AccessTokenInfo } from '../../salesforce/models/AccessTokenInfo';
import { AuthenticationService } from '../../services/authentication/authentication.service';
import { environment } from '../../../environments/environment';
@Component ({
    selector: 'app-chatter-login-view',
    templateUrl: './chatter-login-view.component.html',
    styleUrls: ['./chatter-login-view.component.css']
})
export class ChatterLoginViewComponent implements OnInit {

    constructor (private authenticationService: AuthenticationService, private oauthService: OAuthService, private activatedRoute: ActivatedRoute, private router: Router) { }

    public ngOnInit (): void {
        this.activatedRoute.queryParams.subscribe((params) => {
            const code = params.code;
            if (code) {
                this.authorizeAndPerformLogin(code);
            }
        });
    }
    public onLoginClicked () {
        const url = 'https://test.salesforce.com/services/oauth2/authorize?response_type=code&client_id=' + environment.clientId + '&redirect_uri=' + environment.redirectUrl;
        window.location.href = url;
    }
    private authorizeAndPerformLogin (code: string): void {
        this.oauthService.getAccessToken(code).subscribe((tokenInfo: AccessTokenInfo) => {
            if (tokenInfo && tokenInfo.access_token) {
                this.onLoginSuccessfully(tokenInfo);
            } else {
                this.onLoginFailed();
            }
        });
    }
    private onLoginSuccessfully (tokenInfo: AccessTokenInfo): void {
        this.authenticationService.storeTokenInfo(tokenInfo);
        window.location.href = '/home';
    }
    private onLoginFailed (): void {
        this.router.navigateByUrl('/login');
    }
}
