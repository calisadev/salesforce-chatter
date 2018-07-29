import { Component, OnInit, Input, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { Message } from '../../salesforce/models/Message';

@Component({
    selector: 'app-chat-view',
    templateUrl: './chat-view.component.html',
    styleUrls: ['./chat-view.component.css']
})
export class ChatViewComponent implements OnInit {
    @Input() messages: Message[];
    @Input() nextPageToken: string;
    @Output() loadMoreEvent: EventEmitter<any> = new EventEmitter();
    @ViewChild('chatContainter') private chatContainter: ElementRef;

    private currentUserId: string;

    constructor (private elementRef: ElementRef) { }

    public ngOnInit (): void {
    }
    public scrollBottom () {
        this.chatContainter.nativeElement.scrollTop = this.chatContainter.nativeElement.scrollHeight;
    }
    public scrollTop () {
        this.chatContainter.nativeElement.scrollBottom = this.chatContainter.nativeElement.scrollHeight;
    }

    public onLoadMoreButtonClicked () {
        this.loadMoreEvent.emit(this.nextPageToken);
    }
}
