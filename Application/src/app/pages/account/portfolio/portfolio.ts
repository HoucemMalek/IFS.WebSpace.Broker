import { Component, OnInit } from '@angular/core';
import 'devextreme/data/odata/store';
import { PortfolioStore } from './portfolio.store';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.html',
  styleUrls: ['./portfolio.scss']
})
export class PortfolioComponent {
  sessionData: any;
  priority: any[];

  constructor(
    private store : PortfolioStore
  ) {
    
  }
  
}