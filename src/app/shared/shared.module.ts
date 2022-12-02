import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {CoreModule} from "../core/core.module";

@NgModule({
  declarations: [],
  exports: [
    CommonModule, RouterModule, ReactiveFormsModule
  ],
  imports: [
    CoreModule,
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
