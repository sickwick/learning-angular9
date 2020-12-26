import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LockService {

  log(text: string): void {
    console.log(`Log: ${text}`);
  }
}

