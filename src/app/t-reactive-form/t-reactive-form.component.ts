import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { englishNameOnly } from '../Validators/myvalidators';

@Component({
  selector: 'app-t-reactive-form',
  templateUrl: './t-reactive-form.component.html',
  styleUrls: ['./t-reactive-form.component.css']
})
export class TReactiveFormComponent {

  myForm!: FormGroup;


  get skills() {
    return (this.myForm.controls['skills'] as FormArray).controls as FormGroup[];
  }


  addNewSkill() {

    var skillsArray = this.myForm.controls['skills'] as FormArray;

    skillsArray.controls.push(

      this.fb.group({
        skill: this.fb.nonNullable.control(`skill ${skillsArray.length}`, Validators.required),

        level: this.fb.nonNullable.control(`level ${skillsArray.length}`, Validators.required),
      }


      )
    );

  }

  removeSkill(index: number) {
    var skillsArray = this.myForm.controls['skills'] as FormArray;

    skillsArray.removeAt(index);
  }
  constructor(private fb: FormBuilder) {


    var fName = fb.nonNullable.control('Atallah', [Validators.required, Validators.minLength(2), englishNameOnly()]);
    this.myForm = fb.group({
      firstName: fName,
      secondName: fb.nonNullable.control('Abdallah', [Validators.required, englishNameOnly()]),
      lastName: fb.nonNullable.control('Isayed', [Validators.required, englishNameOnly()]),

      skills: fb.array([

        this.fb.group({
          skill: this.fb.nonNullable.control(`skill  1`, Validators.required),

          level: this.fb.nonNullable.control(`level  2`, Validators.required),
        }


        )

      ])


    });

    fName.valueChanges.subscribe((fnameValue) => {
      if (fnameValue === 'Ata') {
        // this.myForm.controls['secondName'].disable();
        this.myForm.controls['secondName'].clearValidators();
        this.myForm.controls['secondName'].addValidators(Validators.required);
        this.myForm.controls['secondName'].updateValueAndValidity();

      }
      else {
        this.myForm.controls['secondName'].enable();
        this.myForm.controls['secondName'].clearValidators();
        this.myForm.controls['secondName'].addValidators([Validators.required, Validators.minLength(3)]);
        this.myForm.controls['secondName'].updateValueAndValidity();
      }


    });
  }

}
