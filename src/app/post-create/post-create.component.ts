import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-create-post',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
  @Output() c1 = new EventEmitter<string>();
  sending(): any {
    this.c1.emit('data for parent');

  }

}
