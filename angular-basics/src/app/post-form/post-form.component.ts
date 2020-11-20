import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Post} from '../app.component';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

  @Output() Add: EventEmitter<Post> = new EventEmitter<Post>();

  // Аналог - document.querySelector
  // static = true при вызове в ngOnInit
  @ViewChild('titleInput', {static: false}) inputRef: ElementRef;


  title = '';
  text = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  addPost(): void {
    if (this.title.trim() && this.text.trim()) {
      const post: Post = {
        title: this.title,
        text: this.text
      };

      this.Add.emit(post);
      this.title = this.text = '';
    }
  }

  focusTitle(): void {
    this.inputRef.nativeElement.focus();
  }

}
