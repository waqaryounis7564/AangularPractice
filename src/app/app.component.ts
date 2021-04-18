import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = '';
  status: boolean | undefined;

  // tslint:disable-next-line:typedef
  // getStatus() {
  //   this.status = ;
  // }

  // tslint:disable-next-line:typedef
  onClick() {

    this.userName = '';
  }
}
