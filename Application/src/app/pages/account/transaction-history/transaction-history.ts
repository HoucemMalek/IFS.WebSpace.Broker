import { Component, OnInit } from '@angular/core';
import { TransactionHistoryStore } from './transaction-history.store';
import 'devextreme/data/odata/store';
@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.html',
  styleUrls: ['./transaction-history.scss']
})
export class TransactionHistoryComponent{

  sessionData: any;
  priority: any[];

  constructor(
    private store : TransactionHistoryStore
  ) {
    
  }
}