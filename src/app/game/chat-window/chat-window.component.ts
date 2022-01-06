import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.scss']
})
export class ChatWindowComponent implements OnInit {

  constructor(
    public chatService: ChatService
  ) { }

  ngOnInit(): void {
  }

  sendMessage(): void {
    this.chatService.send(
      'Ken',
      '/assets/profile_keyboard.JPG',
      'Message!'
    );
  }
}
