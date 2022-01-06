import { Component, Injectable } from '@angular/core';
import { ChatLogComponent } from '../game/chat-window/chat-log/chat-log.component';
import { ChatLog } from './chat-log';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  public chatHistory: ChatLog[] = [];

  constructor() { }

  send(
    senderName: string,
    senderPictureUrl: string,
    content: Component | string
  ): void {
    let chatLog: ChatLog;
    
    if(content instanceof Component) {
      chatLog = {
        senderPictureUrl: senderPictureUrl ?? "idk",
        senderName: senderName,
        content: content as Component
      };
    } else {
      chatLog = {
        senderPictureUrl: senderPictureUrl ?? "idk",
        senderName: senderName,
        textContent: content as string
      };
    }

    this.sendLog(chatLog);
  }

  sendLog(log: ChatLog): void {
    this.chatHistory.push(log);
  }

  clear(): void {
    this.chatHistory = [];
  }
}
