import { Component } from "@angular/core";

@Component({
    selector : 'app-student',//used in some other component  to load this
   // template : '<h2> using template property</h2>',
    templateUrl : './student.component.html',//relative path with respect to this
    styleUrls : ['./student.component.CSS']
    //styles : ['h2{color:red}']
})
export class StudentComponent {
    studentName = 'Rajesh';

}