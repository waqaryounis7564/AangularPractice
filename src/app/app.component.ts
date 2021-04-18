import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  show: boolean | undefined;
  total = 0;
  log = [];

  // tslint:disable-next-line:typedef
  onClick() {
    // this.total = 0;
    this.show = this.show ? false : true;
    // @ts-ignore
    this.total++;
    // @ts-ignore
    this.log.push(this.total);
    console.log(this.total);

  }
}
