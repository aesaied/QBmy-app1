import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Student } from '../Models/student';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {

  @Output() onCreateStudent = new EventEmitter<Student>();

  @ViewChild('f') f!: NgForm;
  submit(form: NgForm) {

    //alert(JSON.stringify(form.value));


    //    var student: Student = { fullName:form.value.fullName, }

    //  add to  db -->  call web api
    this.onCreateStudent.emit(form.value);



  }

  ngOnInit() {


    setTimeout(() => {


      //this.f.setValue({ city: 'Ramallah', fullName: 'Atallah', mark: 90 });
      this.f.resetForm({ 'fullName': 'Atallah' });
      this.f.controls['city'].setValue('Zababdeh');



    });

  }

}
