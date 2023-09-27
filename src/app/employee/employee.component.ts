import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {


  constructor(private router: Router, private rout: ActivatedRoute) {


  }
  ngOnInit(): void {
    var item = this.rout.paramMap.pipe(switchMap((params, index) => {
      return new Observable();
    }));
  }


  goToHome() {
    this.router.navigate(['/home']);
  }

}
