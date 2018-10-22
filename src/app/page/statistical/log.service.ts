import { Injectable } from '@angular/core';

@Injectable() 
export class LoggerService {
  constructor() { }

  debug(msg: string) {
    console.log(msg);
  }
}