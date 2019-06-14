import { Component} from '@angular/core';
import { OrderStore } from './order.store';

@Component({
  selector: 'app-order',
  templateUrl: './order.html',
  styleUrls: ['./order.scss']
})
export class OrderComponent{

  sessionData: any;
  priority: any[];

  constructor(
    private store : OrderStore
  ) {
    
  }

}
