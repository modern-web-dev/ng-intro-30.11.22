import { NgModule} from '@angular/core';
import {BookOverviewComponent} from "./book-overview.component";
import {SharedModule} from "../../../shared/shared.module";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    BookOverviewComponent
  ],
  exports: [
    BookOverviewComponent
  ],
  imports: [
    RouterModule.forChild([
      {path: '', component:  BookOverviewComponent},
    ]),
    SharedModule
  ],
})
export class BookOverviewModule {

}
