import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-even',
  styleUrls: ['./even.component.css'],
  templateUrl: './even.component.html'
})
export class EvenComponent {
  @Input() num: any;

  constructor() {
  }
}
