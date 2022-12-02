import { NgModule} from '@angular/core';
import {BookDetailsComponent} from "./book-details.component";
import {FormSavedGuard} from "../../../core/form-saved.guard";
import {RouterModule} from "@angular/router";
import {BookResolver} from "../../../core/book.resolver";
import {SharedModule} from "../../../shared/shared.module";

@NgModule({
  declarations: [
    BookDetailsComponent
  ],
  exports: [
    BookDetailsComponent
  ],
  imports: [
    RouterModule.forChild([
      {path: 'new', component:  BookDetailsComponent, canDeactivate: [FormSavedGuard]},
      {path: ':id', component:  BookDetailsComponent, canDeactivate: [FormSavedGuard], resolve: {book: BookResolver} },
    ]),
    SharedModule
  ],
})
export class BookDetailsModule {

}
