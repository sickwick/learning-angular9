import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public e: number = Math.E;

  public str = 'hello world';

  public date: Date = new Date();
}
