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

  ngOnInit() {
    this.students = this.studentService.getAll();
  }
}
