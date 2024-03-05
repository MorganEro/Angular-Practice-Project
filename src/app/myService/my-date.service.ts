import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MyDateService {
  constructor() {}

  showTodayDate() {
    let nDate = new Date();
    return nDate;
  }
}
