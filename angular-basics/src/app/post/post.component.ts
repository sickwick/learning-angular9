import {Component, ContentChild, ElementRef, EventEmitter, Input, Output, ViewEncapsulation,} from '@angular/core';
import {Post} from '../app.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PostComponent {

  @Input() post: Post;

  @ContentChild('info', {static: true}) infoRef: ElementRef;

  @Output() OnRemove = new EventEmitter<number>();

  constructor() {
    console.log('constructor');
  }

  removePost(): void {
    this.OnRemove.emit(this.post.id);
  }
}
