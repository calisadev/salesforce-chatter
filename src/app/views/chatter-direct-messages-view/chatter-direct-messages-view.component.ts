import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-chatter-direct-messages-view',
    templateUrl: './chatter-direct-messages-view.component.html',
    styleUrls: ['./chatter-direct-messages-view.component.css']
})
export class ChatterDirectMessagesViewComponent implements OnInit {
    public title: string;
    constructor() { }

    public ngOnInit (): void {
        this.title = "Direct Messages";
    }
}
