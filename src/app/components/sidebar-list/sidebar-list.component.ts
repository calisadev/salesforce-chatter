import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Group } from '../../salesforce/models/Group';

@Component({
    selector: 'app-sidebar-list',
    templateUrl: './sidebar-list.component.html',
    styleUrls: ['./sidebar-list.component.css']
})
export class SidebarListComponent implements OnInit {
    @Input() groups : Group[];
    @Output() groupClickEvent: EventEmitter<any> = new EventEmitter();

    constructor() { }

    public ngOnInit (): void {
    }
    public onGroupClicked (groupId: string) {
        this.groupClickEvent.emit(groupId);
    }
}
