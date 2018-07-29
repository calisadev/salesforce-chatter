import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-chat-composer',
    templateUrl: './chat-composer.component.html',
    styleUrls: ['./chat-composer.component.css']
})
export class ChatComposerComponent {
    public message: string;
    @Output() sendMessageEvent: EventEmitter<any> = new EventEmitter();

    constructor() { }

    public onKeyDown (event: any) {
        if (event.keyCode == 13) {
            this.sendMessageEvent.emit(this.message);
        }
    }
    public clear (): void {
        this.message = "";
    }
}
