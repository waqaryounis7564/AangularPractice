import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  templateUrl: './header.component.html',
  selector: 'app-header'
})
export class HeaderComponent {
  @Input() c2 = '';
}
