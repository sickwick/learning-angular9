import {Component} from '@angular/core';

export interface Post {
  title: string;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  search = '';
  searchField = 'title';

  posts: Post[] = [
    {title: 'Beer', text: 'textkjfb;ajksfb'},
    {title: 'Bread', text: 'tqqqqqqqqqq'},
    {title: 'U-key', text: 'uuuuuuuuuuu'},
  ];
}
