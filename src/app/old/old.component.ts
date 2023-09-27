import { Component } from '@angular/core';
import { Student } from '../Models/student';

@Component({
  selector: 'app-old',
  templateUrl: './old.component.html',
  styleUrls: ['./old.component.css']
})
export class OldComponent {

  title = 'my-app';
  showWarningMsg = false;
  names: string[] = ['Atallah', 'Jamal', 'Adham'];

  x!: string | number;

  color = 'red';

  userName = 'Jamal';

  students: Student[] = [];

  constructor() {
    this.students.push({ fullName: 'Atallah', mark: 89, city: 'Ramallah' });
    this.students.push({ fullName: 'Adham', mark: 95 });
    this.students.push({ fullName: 'Lina', mark: 99 });
  }

  changeTitle(newTitle: string) {

    this.title = newTitle;
    this.x = 10;
    this.x = 'Atallah';
    //this.x = true;
  }
}
