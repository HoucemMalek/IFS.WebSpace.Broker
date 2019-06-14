import { Component, OnInit } from '@angular/core';
import { OrderHistoryStore } from './order-history.store';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.html',
  styleUrls: ['./order-history.scss']
})
export class OrderHistoryComponent{

  sessionData: any;
  priority: any[];

  constructor(
    private store : OrderHistoryStore
  ) {
    
  }
  
}