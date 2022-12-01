import {Component, OnDestroy} from '@angular/core';
import {Book} from '../../model';
import {BookService} from '../../services/book.service';
import {Observable, Subject, takeUntil, tap} from 'rxjs';

@Component({
  selector: 'ba-book-overview',
  templateUrl: './book-overview.component.html',
  styleUrls: ['./book-overview.component.scss']
})
export class BookOverviewComponent implements OnDestroy{
  readonly books$: Observable<Book[]>;
  selectedBook: Book | null = null;
  private readonly unsubscribe = new Subject<void>();

  constructor(private readonly bookService: BookService) {
    this.books$ = bookService.findAll()
      .pipe(
        tap(books => console.log(books))
      );
  }

  selectBook(book: Book) {
    this.selectedBook = book;
  }

  isBookSelected(book: Book) {
    return this.selectedBook === book;
  }

  updateBook(changedBook: Book) {
    this.bookService.update(changedBook)
      .pipe(
        takeUntil(this.unsubscribe)
      )
      .subscribe(changedBook => {
        this.selectBook(changedBook);
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
