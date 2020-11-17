import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public array = [1, 1, 2, 3, 5, 8, 13];
  public obj = [
    {title: 'Hello', name: 'user', comments: [
        {name: 'max', text: 'lorem2'},
        {name: 'max', text: 'lorem1'},
        {name: 'max', text: 'lorem2'},
        {name: 'max', text: 'lorem3'}
      ]},
    {title: 'WOW', name: 'user', comments: [
        {name: 'UNG', text: 'lorem2'},
        {name: 'UNG', text: 'lorem1'},
        {name: 'UNG', text: 'lorem2'},
        {name: 'UNG', text: 'lorem3'}
      ]}
  ];
}
