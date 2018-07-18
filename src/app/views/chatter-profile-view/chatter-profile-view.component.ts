import { Component, OnInit } from '@angular/core';

@Component({
        selector: 'app-chatter-profile-view',
        templateUrl: './chatter-profile-view.component.html',
        styleUrls: ['./chatter-profile-view.component.css']
})
export class ChatterProfileViewComponent implements OnInit {

    public title: string;
    constructor() { }

    public ngOnInit (): void {
        this.title = "Profile";
    }

}
