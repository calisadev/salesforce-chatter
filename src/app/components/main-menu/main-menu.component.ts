import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication/authentication.service';
import { User } from '../../salesforce/models/User';

@Component({
    selector: 'app-main-menu',
    templateUrl: './main-menu.component.html',
    styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

    public isLoggedIn : boolean = false;
    public currentUserDetails: User;

    constructor (private authenticationService: AuthenticationService) { }
    
    public ngOnInit (): void {
        this.isLoggedIn = this.authenticationService.isLoggedIn();
        this.currentUserDetails = this.authenticationService.getCurrentUserDetails();
    }
}
