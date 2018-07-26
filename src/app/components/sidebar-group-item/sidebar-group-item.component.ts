import { Component, OnInit, Input } from '@angular/core';
import { Group } from '../../salesforce/models/Group';
@Component({
    selector: 'app-sidebar-group-item',
    templateUrl: './sidebar-group-item.component.html',
    styleUrls: ['./sidebar-group-item.component.css']
})
export class SidebarGroupItemComponent implements OnInit {

    @Input() group: Group;

    constructor() { }

    ngOnInit () {
    }

}
