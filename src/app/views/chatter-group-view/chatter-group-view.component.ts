import { Component, OnInit, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { GroupService } from '../../salesforce/services/group.service'
import { Group, GROUP_VISIBILITY } from '../../salesforce/models/Group';
import { Feed } from '../../salesforce/models/Feed';
import { FeedService } from '../../salesforce/services/feed.service';
import { FeedComposerComponent } from '../../components/feed-composer/feed-composer.component';
import { FeedViewComponent } from '../../components/feed-view/feed-view.component';
import { Comment } from '../../salesforce/models/Comment';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CreateGroupDialogComponent } from '../../components/create-group-dialog/create-group-dialog.component';
import { SnackbarService } from '../../services/snackbar.service';

@Component({
    selector: 'app-chatter-group-view',
    templateUrl: './chatter-group-view.component.html',
    styleUrls: ['./chatter-group-view.component.css']
})
export class ChatterGroupViewComponent implements OnInit {
    public title: string;
    public currentGroup: Group;
    @ViewChild(FeedComposerComponent) feedComposer: FeedComposerComponent
    @ViewChild(FeedViewComponent) feedView: FeedViewComponent

    constructor (private groupService: GroupService, private feedService: FeedService, public dialog: MatDialog, public snackbarService: SnackbarService) {}

    public groups: Group[];
    public feeds: Feed[];

    public ngOnInit (): void {
        this.title = "Groups";
        this.groupService.getAll().subscribe((groups: Group[]) => {
            this.groups = groups;
            this.onGroupSelected(this.groups[0]);
        });
    }
    public toggleRightSideBar () {
        
    }
    public onCreateGroupClicked (): void {
        const dialogRef = this.dialog.open(CreateGroupDialogComponent, {
            width: '500px',
            data: {}
        });
        dialogRef.afterClosed().subscribe((group) => {
            this.createGroup(group);
        });
    }
    private createGroup (group: Group) {
        if (group) {
            this.groupService.createGroup(group.name, group.visibility).subscribe((group: Group) => {
                if (group && group.id) {
                    this.snackbarService.showSuccessMessage('Group was created successfully!');
                    this.groups.unshift(group);
                }
            }, (error: any) => {
                this.snackbarService.showErrorMessage('Failed to create group!');
            });
        }
    }

    public onGroupSelected (group: Group): void {
        this.currentGroup = group;
        this.currentGroup.isSelected = true;
        this.feedService.getGroupFeeds(group.id).subscribe((result: any) => {
            this.feeds = result.elements;
        });
    }
    public onFeedPost (feedContent: string): void {
        if (this.currentGroup && this.currentGroup.id && feedContent) {
            this.feedService.postFeedToSubjectId(this.currentGroup.id, feedContent).subscribe((feed: Feed) => {
                if (feed && feed.id) {
                    this.feeds.unshift(feed);
                    this.feedComposer.clear();
                }
            });
        }
    }
    public onCommentPostEvent (feed: Feed): void {
        if (feed.id && feed.newComment) {
            this.feedService.postComment(feed.id, feed.newComment).subscribe((comment: Comment) => {
                if (comment && comment.id) {
                    this.attatchCommentToFeed(comment, feed);
                }
            });
        }
    }
    private attatchCommentToFeed (comment: Comment, feed: Feed): void {
        for (let curFeed of this.feeds) {
            if (curFeed.id === feed.id) {
                curFeed.capabilities.comments.page.items.push(comment);
                curFeed.newComment = '';
            }
        }
    }
}
