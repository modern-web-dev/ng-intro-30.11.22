import {Routes} from "@angular/router";

export const routes: Routes = [
  {path: 'book-list', loadChildren: ()=> import('./book/features/book-overview/book-overview.module').then(module => module.BookOverviewModule)},
  {path: 'book', loadChildren: ()=> import('./book/features/book-details/book-details.module').then(module => module.BookDetailsModule)},
  {path: '', redirectTo: '/book-list', pathMatch: 'full' },
  {path: '**',  redirectTo: '/book-list' }
];
