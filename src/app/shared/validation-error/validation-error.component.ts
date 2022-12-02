import {Component, HostBinding, Input,} from '@angular/core';
import {AbstractControl} from "@angular/forms";

@Component({
  selector: 'ba-validation-error',
  templateUrl: './validation-error.component.html',
  styleUrls: ['./validation-error.component.scss'],
  host: {
    class: "invalid-feedback2"
  }
})
export class ValidationErrorComponent {
  @HostBinding("class.invalid-feedback")
  hasInvalidFeedbackClass = true;

  msq: {[key:string]: string} = {
    required: "Required",
    maxlength: "Too long",
    mojMaxLength10: "Moj walidator"
  }

  @Input()
  control!: AbstractControl | null;

  get errors(){
    return Object.keys(this.control!.errors as any).map(key=> this.msq[key]);
  }
}
