import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  arrEven: number[] = [];
  arrOdd: number[] = [];

  // tslint:disable-next-line:typedef
  getVal(num: number) {
    if (num % 2 === 0) {
      this.arrEven.push(num);
    } else {
      this.arrOdd.push(num);
    }
    console.log(this.arrOdd);
    console.log(this.arrEven);
  }
}
