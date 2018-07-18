import { Component, OnInit } from '@angular/core';
import { GroupService } from '../../salesforce/services/group.service'
import { Group } from '../../salesforce/models/Group';
import { Feed } from '../../salesforce/models/Feed';
import { FeedService } from '../../salesforce/services/feed.service';
@Component({
    selector: 'app-chatter-home-view',
    templateUrl: './chatter-home-view.component.html',
    styleUrls: ['./chatter-home-view.component.css']
})
export class ChatterHomeViewComponent implements OnInit {
    public title: string;

    constructor (private groupService: GroupService, private feedService: FeedService) {}

    public groups: Group[];
    public feeds: Feed[];

    public ngOnInit (): void {
        this.title = "Home";
        this.groupService.getAll().subscribe((groups: Group[]) => {
            this.groups = groups;
        });
    }
    public onGroupSelected (groupId: string): void {
        console.log(groupId);
        this.feedService.getGroupFeeds(groupId).subscribe((result: any) => {
            this.feeds = result.elements;
        });
    }
}
