import {Component, OnInit} from '@angular/core';

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
export class AppComponent implements OnInit {
  posts: Post[] = [
    {title: 'Wont', text: 'Teach components', id: 1},
    {title: 'Next block', text: 'Directives and pipes', id: 2}
  ];

  ngOnInit(): void {
    setTimeout(() => {
      console.clear();
      console.log('Timeout');
      this.posts[0] = {
        title : 'change',
        text: 'change'
      };
    }, 5000);
  }

  updatePosts(post: Post): void {
    this.posts.unshift(post);
    console.log(post);
  }

  removePost(id: number): void {
    console.log('CHECK');
    this.posts = this.posts.filter(p => p.id !== id);
  }
}
