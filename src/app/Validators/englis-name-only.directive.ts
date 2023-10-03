import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { englishNameOnly } from './myvalidators';

@Directive({
  selector: '[EnglisNameOnly]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: EnglisNameOnlyDirective,
    multi: true
  }]
})
export class EnglisNameOnlyDirective implements Validator {

  constructor() { }
  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    return englishNameOnly()(control);
  }
  registerOnValidatorChange?(fn: () => void): void {
    //throw new Error('Method not implemented.');
  }

}
