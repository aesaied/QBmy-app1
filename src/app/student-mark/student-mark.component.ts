import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-student-mark',
  templateUrl: './student-mark.component.html',
  styleUrls: ['./student-mark.component.css']
})
export class StudentMarkComponent {

  @Input() mark!: number;

}
