import {Component} from '@angular/core';

export interface Post {
  title: string;
  text: string;
  id?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts: Post[] = [
    {title: 'Wont', text: 'Teach components', id: 1},
    {title: 'Next block', text: 'Directives and pipes', id: 2}
  ];

  updatePosts(post: Post): void{
    this.posts.unshift(post);
    console.log(post);
  }
}
