import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../Services/students.service';
import { Student } from '../Models/student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students!: Student[];

  constructor(private studentService: StudentsService) {



  }


  addToList(student: Student) {
    this.students.push(student);
  }

  ngOnInit() {
    this.students = this.studentService.getAll();
  }
}
