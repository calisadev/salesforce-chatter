import { Component, OnInit, Input } from '@angular/core';
import { Group } from '../../salesforce/models/Group';

@Component({
    selector: 'app-sidebar-list-item',
    templateUrl: './sidebar-list-item.component.html',
    styleUrls: ['./sidebar-list-item.component.css']
})
export class SidebarListItemComponent implements OnInit {
    @Input() group: Group;

    constructor() { }

    ngOnInit () {
        console.log(this.group);
    }

}
