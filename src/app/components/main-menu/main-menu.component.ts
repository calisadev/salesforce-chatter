import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication/authentication.service';

@Component({
    selector: 'app-main-menu',
    templateUrl: './main-menu.component.html',
    styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

    private isLoggedIn : boolean = false;

    constructor (private authenticationService: AuthenticationService) { }
    
    public ngOnInit () {
        this.isLoggedIn = this.authenticationService.isLoggedIn();
    }

}
