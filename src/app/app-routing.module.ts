import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ChildComponent } from './child/child.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { EmployeeUpdateComponent } from './employee-update/employee-update.component';
import { EmployeeComponent } from './employee/employee.component';
import { OldComponent } from './old/old.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentViewComponent } from './student-view/student-view.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'aboutus', redirectTo: 'about-us', pathMatch: 'full' },
  {
    path: 'about-us', component: AboutUsComponent

  },

  { path: 'old', component: OldComponent }

  ,
  {
    path: 'employee', component: EmployeeComponent, children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: EmployeeListComponent }
      , { path: 'create', component: EmployeeCreateComponent }
      , { path: 'update', component: EmployeeCreateComponent, pathMatch: 'full' }

      , { path: 'update/:id', component: EmployeeUpdateComponent }
      , { path: 'update/:id/:name', component: EmployeeUpdateComponent }



    ]


  },
  {
    path: 'student', children: [

      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: StudentListComponent },
      { path: 'view/:name', component: StudentViewComponent },


    ]
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
