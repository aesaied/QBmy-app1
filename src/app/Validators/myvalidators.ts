import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function englishNameOnly(): ValidatorFn {

    return (control: AbstractControl): ValidationErrors | null => {



        var valid = /^[A-Za-z][A-Za-z]*$/.test(control.value);


        return valid ? null : { englishNameOnly: true };
    }
}

