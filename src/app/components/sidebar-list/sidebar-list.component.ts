import { Component, OnInit, Input } from '@angular/core';
import { Group } from '../../salesforce/models/Group';

@Component({
    selector: 'app-sidebar-list',
    templateUrl: './sidebar-list.component.html',
    styleUrls: ['./sidebar-list.component.css']
})
export class SidebarListComponent implements OnInit {
    @Input() groups : Group[];

    constructor() { }

    ngOnInit () {
        console.log(this.groups);
    }

}
