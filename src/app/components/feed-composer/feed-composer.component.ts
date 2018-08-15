import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-feed-composer',
    templateUrl: './feed-composer.component.html',
    styleUrls: ['./feed-composer.component.css']
})
export class FeedComposerComponent {

    public feedContent: string;
    @Output() feedPostEvent: EventEmitter<any> = new EventEmitter();
    
    public onPostButtonClick (): void {
        this.feedPostEvent.emit(this.feedContent);
    }
    
    public clear (): void {
        this.feedContent = "";
    }
}
