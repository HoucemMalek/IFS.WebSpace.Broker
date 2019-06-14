import { Component} from '@angular/core';
import ArrayStore from "devextreme/data/array_store";


export class InstrumentSummaryStore{

    sessionData :ArrayStore;
    dataSource: any;
    priority: any[];
  
  
    constructor() {
    //   this.sessionData = new ArrayStore({
      
    //       data: [{ "isinCode": 1,
    //       "Dern": "ADWYA",
    //       "Ouv": "11",
    //       "+Haut": "4,55",
    //       "SeuilH": "0.00%",
    //       "NbrA": 1,
    //       "QtéT": "40",
    //       "CTO": "4,50",
    //       "QTO": "242",
    //       "Var%": "2",
    //       "Clot": "5",
    //       "+Bas": "70",
    //       "SeuilB": "242",
    //       "Cap.Ech": "242",
    //       "VTO": "242",
    //       "Vol.TO": "242"
          
    //   }],
    //   key: ["isinCode"],
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
      
  
    // })
  
  }
}
