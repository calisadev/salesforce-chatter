import { Component, OnInit, Input } from '@angular/core';
import { Feed } from '../../salesforce/models/Feed';

@Component({
    selector: 'app-chat-view',
    templateUrl: './chat-view.component.html',
    styleUrls: ['./chat-view.component.css']
})
export class ChatViewComponent implements OnInit {
    @Input() feeds : Feed[];
    
    constructor() { }

    ngOnInit() {
         
    }
}
