import { Component} from '@angular/core';
import { SessionStore } from "./session.store";
import 'devextreme/data/odata/store';


@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.scss']
})
export class SessionComponent{

  sessionData: any;
  priority: any[];

  constructor(
    private store : SessionStore
  ) {
    
  }
}
