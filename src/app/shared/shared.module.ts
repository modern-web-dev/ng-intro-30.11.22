import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import { ValidationErrorComponent } from './validation-error/validation-error.component';

@NgModule({
  declarations: [
    ValidationErrorComponent
  ],
    exports: [
        CommonModule, RouterModule, ReactiveFormsModule, ValidationErrorComponent
    ],
  imports: [
    CommonModule,
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: []
    }
  }
}
