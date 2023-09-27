import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Student } from '../Models/student';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent {

  @Output() onCreateStudent = new EventEmitter<Student>();

  submit(form: NgForm) {

    //alert(JSON.stringify(form.value));


    //    var student: Student = { fullName:form.value.fullName, }

    //  add to  db -->  call web api
    this.onCreateStudent.emit(form.value);



  }

}
