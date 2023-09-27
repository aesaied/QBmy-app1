import { Inject, Injectable, InjectionToken, Injector } from '@angular/core';
import { Student } from '../Models/student';
import { API_TOKEN } from '../MyAppTokens';

@Injectable({
  providedIn: 'root'
})
export class NewStudentsService {

  //API_TOKEN = new InjectionToken<string>('API_URL');
  constructor(@Inject('API_URL') private apiUrl: string, private injector: Injector) {

    console.log(`API_URL = ${apiUrl}`);

    alert(injector.get(API_TOKEN));

  }
  students: Student[] = [];

  public getAll(): Student[] {


    if (this.students.length == 0) {

      this.students.push({ fullName: 'Atallah', mark: 89, city: 'Ramallah' });
      this.students.push({ fullName: 'Adham', mark: 95 });
      this.students.push({ fullName: 'Lina', mark: 99 });
      this.students.push({ fullName: 'Khateeb', mark: 99 });


    }

    return this.students;
  }

}
