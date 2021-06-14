import { Injectable } from '@angular/core';
import { DashBox } from '../models/dash-item.model';

@Injectable({
  providedIn: 'root',
})
export class DashBoardServicesService {
  db: Array<DashBox> = [
    {
      boxName: 'Shopping',
      content: ['buy fish', 'buy vegestable'],
    },
  ];
  constructor() {}
}
