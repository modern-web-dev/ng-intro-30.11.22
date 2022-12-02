import {Component, OnDestroy} from '@angular/core';
import {Book} from '../../model';
import {BookService} from '../../services/book.service';
import {map, Observable, Subject} from 'rxjs';

@Component({
  selector: 'ba-book-overview',
  templateUrl: './book-overview.component.html',
  styleUrls: ['./book-overview.component.scss']
})
export class BookOverviewComponent implements OnDestroy{
  readonly books$: Observable<Book[]>;
  readonly booksLength$: Observable<number>;
  private readonly unsubscribe = new Subject<void>();

  constructor(bookService: BookService) {
    this.books$ = bookService.findAll();
    this.booksLength$ = this.books$.pipe(
      map((books)=>books.length))
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
