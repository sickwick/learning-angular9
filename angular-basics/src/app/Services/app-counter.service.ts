import {Injectable} from '@angular/core';
import {LockService} from './lock.service';

@Injectable({
  providedIn: 'root'
})
export class AppCounterService {
  counter = 0;

  constructor(private lockService: LockService) {
  }

  increase(): void {
    this.lockService.log('increase counter');
    this.counter++;
  }

  decrease(): void {
    this.lockService.log('decrease counter');
    this.counter--;
  }
}
