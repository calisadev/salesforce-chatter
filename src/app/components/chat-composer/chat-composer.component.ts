import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-chat-composer',
    templateUrl: './chat-composer.component.html',
    styleUrls: ['./chat-composer.component.css']
})
export class ChatComposerComponent {
    public message: string;
    @Output() feedPostEvent: EventEmitter<any> = new EventEmitter();

    constructor() { }

    public onSendButtonClick () {
        this.feedPostEvent.emit(this.message);
    }
    public clear (): void {
        this.message = "";
    }
}
