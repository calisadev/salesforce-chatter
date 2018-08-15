import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { GROUP_VISIBILITY } from '../../salesforce/models/Group';

type NewGroup = {
    name: string,
    visibility: string
}
type VisibilityType = {
    code: string,
    name: string
}

@Component({
    selector: 'app-create-group-dialog',
    templateUrl: './create-group-dialog.component.html',
    styleUrls: ['./create-group-dialog.component.css']
})
export class CreateGroupDialogComponent implements OnInit {
    public groupVisibilityTypes : VisibilityType[];
    public group: NewGroup;
    
    constructor (public dialogRef: MatDialogRef<CreateGroupDialogComponent>) {}
    
    public ngOnInit (): void {
        this.initVisibilityTypes();
        this.initNewGroup();
    }

    private initVisibilityTypes (): void {
        this.groupVisibilityTypes = [{
            code: GROUP_VISIBILITY.PUBLIC,
            name: 'Public Access' 
        }, {
            code: GROUP_VISIBILITY.PRIVATE,
            name: 'Private Access' 
        }];
    }

    private initNewGroup (): void {
        this.group = {
            name: '',
            visibility: GROUP_VISIBILITY.PUBLIC
        };
    }

    public onNoClick (): void {
        this.dialogRef.close();
    }
}
