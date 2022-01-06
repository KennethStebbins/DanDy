import { Component } from "@angular/core";

export interface ChatLog {
    senderPictureUrl: string;
    senderName: string;

    content?: Component;
    textContent?: string;
}