import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UserService } from '../../salesforce/services/user.service';
import { User } from '../../salesforce/models/User';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent, MatDialogRef } from '@angular/material';

type NewConversation = {
    users: User[],
    message: string 
}
@Component({
    selector: 'app-create-conversation-dialog',
    templateUrl: './create-conversation-dialog.component.html',
    styleUrls: ['./create-conversation-dialog.component.css']
})
export class CreateConversationDialogComponent implements OnInit {

    public newConversation: NewConversation;

    public userCtrl = new FormControl();
    public allUsers: User[];
    public filteredUsers: Observable<User[]>;
    @ViewChild('userInput') userInput: ElementRef;

    constructor (private userService: UserService, public dialogRef: MatDialogRef<CreateConversationDialogComponent>) {}

    public ngOnInit (): void {
        this.initNewConversation();
        this.loadAllUsers();
        this.registerOnUserFilterEvent();
    }

    private initNewConversation () {
        this.newConversation = {
            users: [],
            message: ''  
        };
    }

    private loadAllUsers () {
        this.userService.getAllUsers().subscribe((users: any) => {
            this.allUsers = users.users;
        });
    }

    private registerOnUserFilterEvent () {
        this.filteredUsers = this.userCtrl.valueChanges.pipe(
            map((filterText: string) => typeof filterText == 'string' ? this.filterByName(filterText) : this.allUsers)
        );
    }

    public remove (user: User): void {
        const index = this.newConversation.users.indexOf(user);
        if (index >= 0) {
            this.newConversation.users.splice(index, 1);
        }
    }

    public selected (event: MatAutocompleteSelectedEvent): void {
        this.newConversation.users.push(event.option.value);
        this.userInput.nativeElement.value = '';
        this.userCtrl.setValue('');
    }

    public shouldEnableCreateButton (): boolean {
        return this.newConversation.users.length > 0 && this.newConversation.message != null && this.newConversation.message.length > 0;
    }

    private filterByName (filterText: string): User[] {
        return this.allUsers.filter((user) => {
            return user.name.toLowerCase().includes(filterText.toLowerCase().trim());
        });
    }

    public onNoClick (): void {
        this.dialogRef.close();
    }
}
