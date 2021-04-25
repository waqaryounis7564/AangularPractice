import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import construct = Reflect.construct;

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css'],
})
export class OddComponent {
  @Input()
  num!: number;


  constructor() {
  }
}
