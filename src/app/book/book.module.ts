import {ModuleWithProviders, NgModule} from '@angular/core';
import {BookDetailsComponent} from './pages/book-details/book-details.component';
import {BookOverviewComponent} from './pages/book-overview/book-overview.component';
import {BookService} from './services/book.service';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    BookDetailsComponent,
    BookOverviewComponent
  ],
  exports: [
    BookOverviewComponent
  ],
  imports: [
    SharedModule
  ]
})
export class BookModule {
  static forRoot(): ModuleWithProviders<BookModule> {
    return {
      ngModule: BookModule,
      providers: [BookService]
    }
  }
}
