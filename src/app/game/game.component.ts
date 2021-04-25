import {AfterContentInit, Component, DoCheck, EventEmitter, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-game',
  styleUrls: ['./game.component.css'],
  templateUrl: './game.component.html'
})
export class GameComponent implements DoCheck {

  constructor() {
  }

  @Output() outCount = new EventEmitter<number>();
  count = 0;
  interval: any;

  ngDoCheck(): void {
    // @ts-ignore
    console.log('GameComponent' + this.count);
  }

  // tslint:disable-next-line:typedef
  onStart() {
    // @ts-ignore
    const interval = setInterval(() => {
      this.outCount.emit(this.count);
      this.count++;
    }, 1000);

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
