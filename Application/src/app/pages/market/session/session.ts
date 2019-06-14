import { Component} from '@angular/core';
import { SessionStore } from "./session.store";
import 'devextreme/data/odata/store';


@Component({
  selector: 'app-session',
  templateUrl: './session.html',
  styleUrls: ['./session.scss']
})
export class SessionComponent{

  sessionData: any;
  priority: any[];

  constructor(private store : SessionStore) {}
  contentReady(e) {
    if (!e.component.getSelectedRowKeys().length)
        e.component.selectRowsByIndexes(0);
}
selectionChanged(e) {
    e.component.collapseAll(-1);
    e.component.expandRow(e.currentSelectedRowKeys[0]);
}
}
