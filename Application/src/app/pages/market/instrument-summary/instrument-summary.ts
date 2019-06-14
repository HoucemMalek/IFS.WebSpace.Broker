import { Component} from '@angular/core';
import { InstrumentSummaryStore } from './instrument-summary.store';
import 'devextreme/data/odata/store';


@Component({
  selector: 'app-instrument-summary',
  templateUrl: './instrument-summary.html',
  styleUrls: ['./instrument-summary.scss']
})
export class InstrumentSummaryComponent{

  sessionData: any;
  priority: any[];

  constructor(
    private store : InstrumentSummaryStore
  ) {
    
  }

}
