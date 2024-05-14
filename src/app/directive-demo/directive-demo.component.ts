import { Component } from '@angular/core';
import { Student } from '../student.model';

@Component({
  selector: 'app-directive-demo',
  templateUrl: './directive-demo.component.html',
  styleUrls: ['./directive-demo.component.css']
})
export class DirectiveDemoComponent {
  message : string=" ";
  num:number=0;
  num1:number =0;
  num2:number =0;
  result:number = 0;
  selectedBranch: string='';
  students: Student[] = [
    {stuId:101,stuName:'ram',stuBranch:'mech',stuPerc:45.8},
    {stuId:101,stuName:'sham',stuBranch:'it',stuPerc:75.8},
    {stuId:101,stuName:'kiru',stuBranch:'cse',stuPerc:95.8},
    {stuId:101,stuName:'yellu',stuBranch:'cse',stuPerc:65.8}
  ];
  values = [23,45,56,34,56,67,87,31];
  onInput() : void{
if (this.num%2 == 0) {
  this.message="even number";
}
else {
  this.message="odd number";
}
  }
  getColor() : string {
    if (this.num%2 == 0) {
      return 'green';
    }
    else {
     return 'red';
    }
  }

  showColor(n:number):string {
    return n %2==0 ? 'green':'red';

  }
  add():void{
    console.log(typeof(this.num1));
this.result = this.num1+this.num2;
  }

}
