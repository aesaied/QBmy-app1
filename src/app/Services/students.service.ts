import { Injectable } from '@angular/core';
import { Student } from '../Models/student';

// @Injectable({
//   providedIn: 'root'
// })
export class StudentsService {

  constructor() { }

  students: Student[] = [];

  public getAll(): Student[] {


    if (this.students.length == 0) {

      this.students.push({ fullName: 'Atallah', mark: 89, city: 'Ramallah' });
      this.students.push({ fullName: 'Adham', mark: 95 });
      this.students.push({ fullName: 'Lina', mark: 99 });

    }

    return this.students;

  }
}
