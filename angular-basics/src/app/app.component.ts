import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-basics';
  arr = [1,2,3]
  obj = {
    a: 1,
    b: {c: 3}
  };
}
