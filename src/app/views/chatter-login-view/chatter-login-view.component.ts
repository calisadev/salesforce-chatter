import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OAuthService  } from '../../salesforce/services/oauth.service';
import { AccessTokenInfo } from '../../salesforce/models/AccessTokenInfo';
import { AuthenticationService } from '../../services/authentication/authentication.service';
import { environment } from '../../../environments/environment';
import { UserService } from '../../salesforce/services/user.service';
import { User } from '../../salesforce/models/User';
@Component ({
    selector: 'app-chatter-login-view',
    templateUrl: './chatter-login-view.component.html',
    styleUrls: ['./chatter-login-view.component.css']
})
export class ChatterLoginViewComponent implements OnInit {
    public instruction: string;

    constructor (private authenticationService: AuthenticationService, private oauthService: OAuthService, private activatedRoute: ActivatedRoute, private router: Router, private userService: UserService) { }

    public ngOnInit (): void {
        this.instruction = 'Please login to continue!';
        this.activatedRoute.queryParams.subscribe((params) => {
            const code = params.code;
            if (code) {
                this.authorizeAndPerformLogin(code);
            }
        });
    }
    public onLoginClicked () {
        const url = environment.salesforceUrl + '/services/oauth2/authorize?response_type=code&client_id=' + environment.clientId + '&redirect_uri=' + environment.redirectUrl;
        window.location.href = url;
    }
    private authorizeAndPerformLogin (code: string): void {
        this.instruction = 'Authorizing, please wait...';
        this.oauthService.getAccessToken(code).subscribe((tokenInfo: AccessTokenInfo) => {
            if (tokenInfo && tokenInfo.access_token) {
                this.onLoginSuccessfully(tokenInfo);
            } else {
                this.onLoginFailed();
            }
        });
    }
    private onLoginSuccessfully (tokenInfo: AccessTokenInfo): void {
        this.instruction = 'Welcome back! We\'re redirecting you to home page...';
        this.authenticationService.storeTokenInfo(tokenInfo);
        this.userService.getCurrentUserDetails().subscribe((user: User) => {
            this.authenticationService.storeCurrentUserDetails(user);
            window.location.href = '/groups';
        });
    }
    private onLoginFailed (): void {
        this.instruction = 'Authentication failed!';
        this.router.navigateByUrl('/login');
    }
}
