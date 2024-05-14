import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
viewComponent : boolean =true;

constructor(){
  setTimeout(() => this.isDisabled=false,5000);
}
  count=0;
  myName = 'Roshan';
  isDisabled = true;
  message = '';
  getName():string{
    return this.myName
  }
  onLogin(): void {
    this.message = 'you have logged In';
  }
  onCount(): void{
    this.count=this.count+1;
  }
  onReset(): void{
    this.count = 0;
  }
}
