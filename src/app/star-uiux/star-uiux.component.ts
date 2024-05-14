import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-star-uiux',
  templateUrl: './star-uiux.component.html',
  styleUrls: ['./star-uiux.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class StarUIUXComponent implements OnInit {

  @Input('rating')  rating: number = 4;
  @Input('starCount')  starCount: number = 5;
  @Input('color')  color: string = 'accent';
  @Output()  ratingUpdated = new EventEmitter();

   snackBarDuration: number = 2000;
    ratingArr :number[] =[];


  constructor(private snackBar: MatSnackBar) {
  }


  ngOnInit() {
    console.log("a "+this.starCount)
    for (let index = 0; index < this.starCount; index++) {
      this.ratingArr.push(index);
    }
  }
  onClick(rating:number) {
    console.log(rating)
    this.snackBar.open('You rated ' + rating + ' / ' + this.starCount, '', {
      duration: this.snackBarDuration
    });
    this.ratingUpdated.emit(rating);
    return false;
  }

  showIcon(index:number) {
    if (this.rating >= index + 1) {
     
      return 'star';
    } else {
     
      return 'star_border';
    }
  }

}

export enum StarRatingColor {
  primary = "primary",
  accent = "accent",
  warn = "warn"
}
