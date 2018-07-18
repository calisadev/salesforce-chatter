import { Component, OnInit } from '@angular/core';

@Component({
        selector: 'app-chatter-users-view',
        templateUrl: './chatter-users-view.component.html',
        styleUrls: ['./chatter-users-view.component.css']
})
export class ChatterUsersViewComponent implements OnInit {

    public title: string;
    constructor() { }

    public ngOnInit (): void {
        this.title = "People";
    }

}
