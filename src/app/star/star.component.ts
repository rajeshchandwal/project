import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit{

  @Input() starIcon = faStar;
 @Input() rating:number=0;
 starWidth : number = 0;
 @Output() ratingClick = new EventEmitter<string>();
 
constructor() {}
  ngOnInit(): void {
    this.starWidth = this.rating * 16;  //1*16=1 star,2*16=2 star
  }

  onClick() {
    this.ratingClick.emit('Product rating :' +this.rating);
  }

}
