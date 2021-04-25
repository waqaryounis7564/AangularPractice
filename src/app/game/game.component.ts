import {AfterContentInit, Component, DoCheck, Input, OnChanges} from '@angular/core';

@Component({
  selector: 'app-game',
  styleUrls: ['./game.component.css'],
  templateUrl: './game.component.html'
})
export class GameComponent implements AfterContentInit, DoCheck {
  count: number | undefined;
  interval: any;

  constructor() {
  }

  ngAfterContentInit(): void {
    this.count = 0;
  }


  ngDoCheck(): void {
    console.log(this.count);
  }

  // tslint:disable-next-line:typedef
  onStart() {
    // @ts-ignore
    const interval = setInterval(() => this.count++, 1000);

    // tslint:disable-next-line:no-unused-expression
    interval;
    this.interval = interval;

  }

  // tslint:disable-next-line:typedef
  onStop() {
    // @ts-ignore
    clearInterval(this.interval);
    this.count = 0;
    console.log('stop');
  }
}
