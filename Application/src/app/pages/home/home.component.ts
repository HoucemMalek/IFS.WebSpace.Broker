import { Component ,Input } from '@angular/core';

@Component({
  selector:'app-home',
  templateUrl: 'home.component.html',
  styleUrls: [ './home.component.scss' ]
})

export class HomeComponent {
  @Input() childMessage: string;
  constructor() {}

  helloWorld() {
    alert('Hello world!');
}

getResolution() {
  alert("Your screen resolution is: " + screen.width + "x" + screen.height);
}
}
