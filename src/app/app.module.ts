import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { HighlightDirective } from './appdirectives/highlight.directive';
import { StudentMarkComponent } from './student-mark/student-mark.component';
import { StudentMarkEvaluatioComponent } from './student-mark-evaluatio/student-mark-evaluatio.component';
import { TestDirective } from './appDirective/test.directive';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { EmployeeUpdateComponent } from './employee-update/employee-update.component';
import { EmployeeComponent } from './employee/employee.component';
import { OldComponent } from './old/old.component';
import { StudentsService } from './Services/students.service';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentViewComponent } from './student-view/student-view.component';
import { NewStudentsService } from './Services/new-students.service';
import { API_TOKEN } from './MyAppTokens';
import { StudentCreateComponent } from './student-create/student-create.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    HighlightDirective,
    StudentMarkComponent,
    StudentMarkEvaluatioComponent,
    TestDirective,
    HomeComponent,
    AboutUsComponent,
    NotFoundComponent,
    EmployeeListComponent,
    EmployeeCreateComponent,
    EmployeeUpdateComponent,
    EmployeeComponent,
    OldComponent,
    StudentListComponent,
    StudentViewComponent,
    StudentCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule
  ],
  providers: [{ provide: StudentsService, useClass: NewStudentsService }
    , { provide: 'API_URL', useValue: 'http://localhost:1234' }
    , { provide: API_TOKEN, useValue: 'http://localhost:9875' }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
