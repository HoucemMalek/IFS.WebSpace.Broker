import { Component} from '@angular/core';

@Component({
  selector: 'app-instrument-summary',
  templateUrl: './instrument-summary.component.html',
  styleUrls: ['./instrument-summary.component.scss']
})
export class InstrumentSummaryComponent{

  dataSource: any;
  priority: any[];

  constructor() {
    this.dataSource = {
      store: {
        type: 'odata',
        key: 'Task_ID',
        url: 'https://js.devexpress.com/Demos/DevAV/odata/Tasks'
      },
      expand: 'ResponsibleEmployee',
      select: [
        'Task_ID',
        'Task_Subject',
        'Task_Start_Date',
        'Task_Due_Date',
        'Task_Status',
        'Task_Priority',
        'Task_Completion',
        'ResponsibleEmployee/Employee_Full_Name'
      ]
    };
    this.priority = [
      { name: 'High', value: 1 },
      { name: 'Urgent', value: 1 },
      { name: 'Normal', value: 1 },
      { name: 'Low', value: 1 }
    ];
  }

}
