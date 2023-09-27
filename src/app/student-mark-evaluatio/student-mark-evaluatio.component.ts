import { Component, Input } from '@angular/core';
import { MarkEnum } from '../AppEnums/mark-enum';

@Component({
  selector: 'app-student-mark-evaluatio',
  templateUrl: './student-mark-evaluatio.component.html',
  styleUrls: ['./student-mark-evaluatio.component.css']
})
export class StudentMarkEvaluatioComponent {


  public ME = MarkEnum;
  @Input() mark!: number;

  evaluation!: MarkEnum;


  getMarkEnum(): MarkEnum {

    if (this.mark > 90) {
      return MarkEnum.Excelent;
    }
    else if (this.mark <= 90 && this.mark > 80) {
      return MarkEnum.VeryGood;
    }
    else if (this.mark <= 80 && this.mark > 70) {
      return MarkEnum.Good;
    }
    else if (this.mark <= 70 && this.mark >= 50) {
      return MarkEnum.Fair;
    }

    return MarkEnum.Fail;

  }

}
