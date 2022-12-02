import {Routes} from "@angular/router";
import {BookOverviewComponent} from "./book/pages/book-overview/book-overview.component";
import {BookDetailsComponent} from "./book/pages/book-details/book-details.component";
import {FormSavedGuard} from "./core/form-saved.guard";
import {BookResolver} from "./core/book.resolver";

export const routes: Routes = [
  {path: 'book-list', component:  BookOverviewComponent },

  {path: 'book', children:[
    {path: 'new', component:  BookDetailsComponent, canDeactivate: [FormSavedGuard]},
    {path: ':id', component:  BookDetailsComponent, canDeactivate: [FormSavedGuard], resolve: {book: BookResolver} },
  ]},

  {path: '', redirectTo: '/book-list', pathMatch: 'full' },
  {path: '**',  redirectTo: '/book-list' }
];
