import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  show: boolean | undefined;

  // tslint:disable-next-line:typedef
  onClick() {
    this.show = this.show ? false : true;
    console.log(this.show);
  }
}
