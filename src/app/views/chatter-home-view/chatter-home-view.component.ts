import { Component, OnInit } from '@angular/core';
import { GroupService } from '../../salesforce/services/group.service'
import { Group } from '../../salesforce/models/Group';
@Component({
    selector: 'app-chatter-home-view',
    templateUrl: './chatter-home-view.component.html',
    styleUrls: ['./chatter-home-view.component.css']
})
export class ChatterHomeViewComponent implements OnInit {
    public title: string;

    constructor (private groupService: GroupService) {}
    private groups: Group[];

    public ngOnInit (): void {
        this.title = "Home";
        this.groupService.getAll().subscribe((groups: Group[]) => {
            this.groups = groups;
        });
    }

}
