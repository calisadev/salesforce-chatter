import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Group, GROUP_VISIBILITY } from '../../salesforce/models/Group';

@Component({
    selector: 'app-create-group-dialog',
    templateUrl: './create-group-dialog.component.html',
    styleUrls: ['./create-group-dialog.component.css']
})
export class CreateGroupDialogComponent implements OnInit {
    public groupVisibilityTypes = [];
    public group: any;
    
    constructor (public dialogRef: MatDialogRef<CreateGroupDialogComponent>) {}
    
    public ngOnInit (): void {
        this.group = {
            name: '',
            visibility: GROUP_VISIBILITY.PUBLIC
        };
        this.groupVisibilityTypes = [{
            code: GROUP_VISIBILITY.PUBLIC,
            name: 'Public Access' 
        },{
            code: GROUP_VISIBILITY.PRIVATE,
            name: 'Private Access' 
        }];
    }

    public onNoClick(): void {
        this.dialogRef.close();
    }
}
