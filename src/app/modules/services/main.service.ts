import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

// provideIn: 'root' it means: this service will be accessable through entire application
// if service has injectable decorator, you can inject any service in this
@Injectable({
  providedIn: 'root'
})
export class MainService {

  // pushedData = new EventEmitter<any>();
  pushedData = new Subject<any>();

  private data: number[] = [];

  constructor() { }

  getData() {
    return this.data.slice();
  }

  pushData(num) {
    this.data.push(num);
  }
}
