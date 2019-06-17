import { Component, OnInit } from '@angular/core';
import 'devextreme/data/odata/store';
import notify from 'devextreme/ui/notify';
import { PortfolioStore } from './portfolio.store';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.html',
  styleUrls: ['./portfolio.scss']
})
export class PortfolioComponent {
  items: any[];

  dataSource: any[];
  priority: any[];
  message = "message from portfolio";
  constructor() {
    this.items = [{
      location: 'before',
      widget: 'dxButton',
      options: {
          type: 'back',
          text: 'Back',
          onClick: () => {
              notify('Back button has been clicked!');
          }
      }
  }, {
      location: 'before',
      widget: 'dxButton',
      locateInMenu: 'auto',
      options: {
          icon: 'refresh',
          onClick: () => {
              notify('Refresh button has been clicked!');
          }
      }
  }, {
      location: 'center',
      locateInMenu: 'never',
      template: () => {
          return '<div class=\'toolbar-label\'><b>Tom\'s Club</b> Products</div>';
      }
  }, {
      location: 'after',
      widget: 'dxButton',
      locateInMenu: 'auto',
      options: {
          icon: 'plus',
          onClick: () => {
              notify('Add button has been clicked!');
          }
      }
  }, {
      locateInMenu: 'always',
      text: 'Save',
      onClick: () => {
          notify('Save option has been clicked!');
      }
  }, {
      locateInMenu: 'always',
      text: 'Print',
      onClick: () => {
          notify('Print option has been clicked!');
      }
  }, {
      locateInMenu: 'always',
      text: 'Settings',
      onClick: () => {
          notify('Settings option has been clicked!');
      }
  }];
    this.dataSource = [{
      "ID": 1,
      "Prefix": "Mr.",
      "FirstName": "John",
      "LastName": "Heart",
      "Position": "CEO",
      "State": "California",
      "BirthDate": "1964/03/16"
  },
  {
      "ID": 2,
      "Prefix": "Mrs.",
      "FirstName": "Olivia",
      "LastName": "Peyton",
      "Position": "Sales Assistant",
      "State": "California",
      "BirthDate": "1981/06/03"
  },
  {
      "ID": 3,
      "Prefix": "Mr.",
      "FirstName": "Robert",
      "LastName": "Reagan",
      "Position": "CMO",
      "State": "Arkansas",
      "BirthDate": "1974/09/07"
  },
  {
      "ID": 4,
      "Prefix": "Ms.",
      "FirstName": "Greta",
      "LastName": "Sims",
      "Position": "HR Manager",
      "State": "Georgia",
      "BirthDate": "1977/11/22"
  },
  {
      "ID": 5,
      "Prefix": "Mr.",
      "FirstName": "Brett",
      "LastName": "Wade",
      "Position": "IT Manager",
      "State": "Idaho",
      "BirthDate": "1968/12/01"
  }]
  } 
  

  
  contentReady(e) {
    if (!e.component.getSelectedRowKeys().length)
        e.component.selectRowsByIndexes(0);
}
selectionChanged(e) {
    e.component.collapseAll(-1);
    e.component.expandRow(e.currentSelectedRowKeys[0]);
}
}