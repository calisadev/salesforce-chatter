import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../../salesforce/models/Message';

@Component({
  selector: 'app-chat-view',
  templateUrl: './chat-view.component.html',
  styleUrls: ['./chat-view.component.css']
})
export class ChatViewComponent implements OnInit {
  @Input() messages: Message[];
  constructor() { }

  ngOnInit() {
  }

}
