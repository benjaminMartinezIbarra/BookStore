import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class RatingComponent implements OnInit {

  @Input()
  set value(newRating: number) {
    this._value = newRating;
    this.buildStarsArray(newRating);
  }

  get value(): number {
    return this._value;
  }

  @Output() valueChange = new EventEmitter<number>();

  private _value: number;

  stars: boolean [];

  constructor() { }

  ngOnInit() {
    }

  onClick(index: number) {
    this.valueChange.emit(index + 1);
  }

  onEnter(i: number) {
    this.buildStarsArray(i);
  }

  onLeave() {
    this.buildStarsArray(this.value);
  }

  buildStarsArray(rating: number) {
    return   this.stars = [1, 2, 3, 4, 5].map(i => i <= rating);

  }

  logRefresh() {
    console.log('refresh');
  }
}
