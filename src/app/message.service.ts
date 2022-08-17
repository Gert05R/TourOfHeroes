import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
//The service exposes its cache of messages and two methods:
export class MessageService {
  messages: string[] = [];
  //One to add() a message to the cache.
  add(message: string) {
    this.messages.push(message);
  }
//Another to clear() the cache.
  clear() {
    this.messages = [];
  }
}
