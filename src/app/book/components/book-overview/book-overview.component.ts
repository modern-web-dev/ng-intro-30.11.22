import {Component} from '@angular/core';
import {Book} from '../../model';

@Component({
  selector: 'ba-book-overview',
  templateUrl: './book-overview.component.html',
  styleUrls: ['./book-overview.component.scss']
})
export class BookOverviewComponent {
  books: Book[];

  selectedBook: Book | null = null;

  constructor() {
    this.books = [
      {
        id: 0,
        authors: 'Douglas Crockford',
        title: 'JavaScript. The Good Parts'
      },
      {
        id: 1,
        authors: 'Tom Hombergs',
        title: 'Get Yor Hands Dirty on Clean Architecture'
      },
      {
        id: 2,
        authors: 'Robert C. Martin',
        title: 'Clean Code'
      },
      {
        id: 3,
        authors: 'Vinit Nayak',
        title: 'Copying and Pasting from Stack Overflow'
      }
    ];
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
