import { Component, Input, OnInit } from '@angular/core';
import { ChatLog } from 'src/app/services/chat-log';

@Component({
  selector: 'app-chat-log',
  templateUrl: './chat-log.component.html',
  styleUrls: ['./chat-log.component.scss']
})
export class ChatLogComponent implements OnInit {

  @Input() chatLog?: ChatLog;

  constructor() { }

  ngOnInit(): void {
  }

}
