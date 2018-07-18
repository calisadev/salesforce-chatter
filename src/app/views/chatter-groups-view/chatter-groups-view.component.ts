import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-chatter-groups-view',
    templateUrl: './chatter-groups-view.component.html',
    styleUrls: ['./chatter-groups-view.component.css']
})
export class ChatterGroupsViewComponent implements OnInit {
    public title: string;
    constructor() { }

    public ngOnInit (): void {
        this.title = "Groups";
    }
}
