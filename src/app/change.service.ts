import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChangeService {

  private counter = 0;

  getCounter() {
    return this.counter;
  }

  incrementCounter() {
    this.counter += 1;
  }
}
