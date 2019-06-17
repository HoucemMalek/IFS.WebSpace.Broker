import { Component, ViewChild} from '@angular/core';
import { SessionStore } from "./session.store";
import 'devextreme/data/odata/store';
import { DxChartComponent } from 'devextreme-angular';


@Component({
  selector: 'app-session',
  templateUrl: './session.html',
  styleUrls: ['./session.scss']
})
export class SessionComponent{
  @ViewChild(DxChartComponent) chart: DxChartComponent;
  stockPrices: any[];
  sessionData: any;
  priority: any[];

  constructor(private store : SessionStore) {
    this.stockPrices = store.data;
  }
  valueChanged(e: any) {
    this.chart.instance.zoomArgument(new Date(e.value[0]), new Date(e.value[1]));
}
  contentReady(e) {
    if (!e.component.getSelectedRowKeys().length)
        e.component.selectRowsByIndexes(0);
}
selectionChanged(e) {
    e.component.collapseAll(-1);
    e.component.expandRow(e.currentSelectedRowKeys[0]);
}
popupVisible: boolean;


showInfo(employee) {
  this.sessionData = employee;
  this.popupVisible = true;
}
}
