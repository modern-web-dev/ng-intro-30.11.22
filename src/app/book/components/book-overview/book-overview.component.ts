import {Component} from '@angular/core';
import {Book} from '../../model';
import {BookService} from '../../services/book.service';

@Component({
  selector: 'ba-book-overview',
  templateUrl: './book-overview.component.html',
  styleUrls: ['./book-overview.component.scss']
})
export class BookOverviewComponent {
  books: Book[];

  selectedBook: Book | null = null;

  constructor(bookService: BookService) {
    this.books = bookService.findAll();
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
