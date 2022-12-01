import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {Book} from '../../model';
import {BookService} from '../../services/book.service';
import {debounceTime, distinctUntilChanged, fromEvent, map, OperatorFunction, switchMap} from 'rxjs';

@Component({
  selector: 'ba-book-overview',
  templateUrl: './book-overview.component.html',
  styleUrls: ['./book-overview.component.scss']
})
export class BookOverviewComponent implements AfterViewInit {
  @ViewChild('searchInput')
  searchInput?: ElementRef

  results: string[] = [];

  // handle: number | null = null;

  books: Book[];

  selectedBook: Book | null = null;

  constructor(private readonly bookService: BookService) {
    this.books = bookService.findAll();
  }

  ngAfterViewInit(): void {
    fromEvent<Event>(this.searchInput?.nativeElement, 'input')
      .pipe(
        mapFromInputEventToTargetValue(),
        debounceTime(500),
        distinctUntilChanged(),
        switchMap(query => this.bookService.search(query))
      )
      .subscribe(results => {
        this.results = results;
      });
  }

  selectBook(book: Book) {
    this.selectedBook = book;
  }

  isBookSelected(book: Book) {
    return this.selectedBook === book;
  }

  updateBook(changedBook: Book) {
    const changedBookCopy = {...changedBook};
    this.books = this.books.map(book => book.id === changedBook.id ? changedBookCopy : book);
    this.selectBook(changedBookCopy);
  }
}

function mapFromInputEventToTargetValue() {
  return map<Event, string>(event => {
    const inputElement = event.target as HTMLInputElement;
    return inputElement.value
  })
}

function addTax(taxValue: number): OperatorFunction<number, number> {
  return map(value => value + taxValue);
}
