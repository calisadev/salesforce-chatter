import { Component, Input, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { Message } from '../../salesforce/models/Message';

@Component({
    selector: 'app-chat-view',
    templateUrl: './chat-view.component.html',
    styleUrls: ['./chat-view.component.css']
})
export class ChatViewComponent {
    @Input() messages: Message[];
    @Input() nextPageToken: string;
    @Output() loadMoreEvent: EventEmitter<any> = new EventEmitter();

    public onLoadMoreButtonClicked (): void {
        this.loadMoreEvent.emit(this.nextPageToken);
    }
}
