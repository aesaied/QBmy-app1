import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from '../Services/students.service';

@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.css']
})
export class StudentViewComponent implements OnInit {

  name!: string | null;
  nameFromObservable!: string | null;
  constructor(private rout: ActivatedRoute, private studentSevice: StudentsService) {

    console.log('Student view created!!');
  }

  ngOnInit() {

    this.name = this.rout.snapshot.paramMap.get('name');

    this.rout.paramMap.subscribe(params => {
      this.nameFromObservable = params.get('name');

    });

  }

}
