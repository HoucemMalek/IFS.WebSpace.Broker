import { Component} from '@angular/core';


export class OrderStore{

  sessionData :any;
  dataSource: any;
  priority: any[];

  constructor() {

   
      this.sessionData = [{
        "ID": 1,
        "CompanyName": "Super Mart of the West",
        "Address": "702 SW 8th Street",
        "City": "Bentonville",
        "State": "Arkansas",
        "Zipcode": 72716,
        "Phone": "(800) 555-2797",
        "Fax": "(800) 555-2171",
        "Website": "http://www.nowebsitesupermart.com"
    }, {
        "ID": 2,
        "CompanyName": "Electronics Depot",
        "Address": "2455 Paces Ferry Road NW",
        "City": "Atlanta",
        "State": "Georgia",
        "Zipcode": 30339,
        "Phone": "(800) 595-3232",
        "Fax": "(800) 595-3231",
        "Website": "http://www.nowebsitedepot.com"
    }, {
        "ID": 3,
        "CompanyName": "K&S Music",
        "Address": "1000 Nicllet Mall",
        "City": "Minneapolis",
        "State": "Minnesota",
        "Zipcode": 55403,
        "Phone": "(612) 304-6073",
        "Fax": "(612) 304-6074",
        "Website": "http://www.nowebsitemusic.com"
    }, {
        "ID": 4,
        "CompanyName": "Tom's Club",
        "Address": "999 Lake Drive",
        "City": "Issaquah",
        "State": "Washington",
        "Zipcode": 98027,
        "Phone": "(800) 955-2292",
        "Fax": "(800) 955-2293",
        "Website": "http://www.nowebsitetomsclub.com"
    }, {
        "ID": 5,
        "CompanyName": "E-Mart",
        "Address": "3333 Beverly Rd",
        "City": "Hoffman Estates",
        "State": "Illinois",
        "Zipcode": 60179,
        "Phone": "(847) 286-2500",
        "Fax": "(847) 286-2501",
        "Website": "http://www.nowebsiteemart.com"
    }, {
        "ID": 6,
        "CompanyName": "Walters",
        "Address": "200 Wilmot Rd",
        "City": "Deerfield",
        "State": "Illinois",
        "Zipcode": 60015,
        "Phone": "(847) 940-2500",
        "Fax": "(847) 940-2501",
        "Website": "http://www.nowebsitewalters.com"
    },]
//     this.dataSource = {
//       store: {
//         type: '',
//         key: this.session.Task_ID,
//         url: this.session,
//       },
//       expand: 'ResponsibleEmployee',
//       select: [
//         'Task_ID',
//         'Task_Subject',
//         'Task_Start_Date',
//         'Task_Due_Date',
//         'Task_Status',
//         'Task_Priority',
//         'Task_Completion',
//         'ResponsibleEmployee/Employee_Full_Name'
//       ]
//     };
    this.priority = [
      { name: 'High', value: 1 },
      { name: 'Urgent', value: 1 },
      { name: 'Normal', value: 1 },
      { name: 'Low', value: 1 }
    ];
  }
}
