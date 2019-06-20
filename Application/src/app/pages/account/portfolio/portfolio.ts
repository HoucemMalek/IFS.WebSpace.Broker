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
  LanguageData:any[];
  items: any[];
  now: Date = new Date();
  dataSource: any[];
  priority: any[];
  downloads: any[];
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


   this.downloads = ["Trial For Visual Studio", "Trial For All Platforms", "Package Managers"];


   this.LanguageData = [{
    language: "English",
    percent: 55.5
}, {
    language: "Chinese",
    percent: 2.8
}, {
    language: "Spanish",
    percent: 4.6
}, {
    language: "Japanese",
    percent: 5.0
}, {
    language: "Portuguese",
    percent: 2.5
}, {
    language: "German",
    percent: 5.8
}, {
    language: "French",
    percent: 4.0
}, {
    language: "Russian",
    percent: 5.9
}, {
    language: "Italian",
    percent: 1.9
}, {
    language: "Polish",
    percent: 1.7
}, {
    language: "Turkish",
    percent: 1.5
}, {
    language: "Dutch",
    percent: 1.3
}, {
    language: "Persian",
    percent: 0.9
}, {
    language: "Arabic",
    percent: 0.8
}, {
    language: "Korean",
    percent: 0.7
}, {
    language: "Czech",
    percent: 0.7
}, {
    language: "Swedish",
    percent: 0.5
}, {
    language: "Vietnamese",
    percent: 0.4
}, {
    language: "Indonesian",
    percent: 0.4
}, {
    language: "Greek",
    percent: 0.4
}, {
    language: "Romanian",
    percent: 0.4
}, {
    language: "Hungarian",
    percent: 0.3
}, {
    language: "Danish",
    percent: 0.3
}, {
    language: "Thai",
    percent: 0.3
}, {
    language: "Finnish",
    percent: 0.2
}, {
    language: "Slovak",
    percent: 0.2
}, {
    language: "Bulgarian",
    percent: 0.2
}, {
    language: "Norwegian",
    percent: 0.2
}, {
    language: "Hebrew",
    percent: 0.1
}, {
    language: "Lithuanian",
    percent: 0.1
}, {
    language: "Croatian",
    percent: 0.1
}, {
    language: "Ukrainian",
    percent: 0.1
}, {
    language: "Norwegian Bokmål",
    percent: 0.1
}, {
    language: "Serbian",
    percent: 0.1
}, {
    language: "Catalan",
    percent: 0.1
}, {
    language: "Slovenian",
    percent: 0.1
}, {
    language: "Latvian",
    percent: 0.1
}, {
    language: "Estonian",
    percent: 0.1
}];
  } 
  

  
  contentReady(e) {
    if (!e.component.getSelectedRowKeys().length)
        e.component.selectRowsByIndexes(0);
}
selectionChanged(e) {
    e.component.collapseAll(-1);
    e.component.expandRow(e.currentSelectedRowKeys[0]);
}

customizeLabel(point) {
    return point.argumentText + ": " + point.valueText + "%";
}


customizeTooltip = (arg: any) => {
    return {
        text: arg.valueText + " - " +arg.percent
    };
}
}
