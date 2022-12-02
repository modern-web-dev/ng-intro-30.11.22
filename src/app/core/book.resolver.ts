import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import {Book} from "../book/model";
import {BookService} from "../book/services/book.service";

@Injectable({
  providedIn: 'root'
})
export class BookResolver implements Resolve<Book> {
  constructor(private bookService:BookService) {
  }
  resolve(route: ActivatedRouteSnapshot): Observable<Book> {
    const bookId = route.paramMap.get("id");

    if(bookId === null || isNaN(+bookId)){
      throw new Error('Wrong ID');
    }
    return this.bookService.findById(+bookId);
  }
}
