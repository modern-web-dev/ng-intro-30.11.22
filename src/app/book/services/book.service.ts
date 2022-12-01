import {Book} from '../model';
import {BehaviorSubject, Observable} from 'rxjs';

export class BookService {
  private booksSubject = new BehaviorSubject<Book[]>([
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
  ]);
  private books$ = this.booksSubject.asObservable();

  findAll(): Observable<Book[]> {
    return this.books$;
  }

  update(book: Book): Observable<Book> {
    return new Observable<Book>(subscriber => {
      setTimeout(() => {
        const changedBookCopy = {...book};
        const currentBooks = this.booksSubject.value;
        const newBooks = currentBooks.map(currentBook => currentBook.id === book.id ? changedBookCopy : currentBook);
        this.booksSubject.next(newBooks);
        subscriber.next(changedBookCopy);
        subscriber.complete();
      }, 1000);
    });
  }

  findById(bookId: number): Observable<Book> {
    return new Observable<Book>(subscriber => {
      setTimeout(() => {
        const currentBooks = this.booksSubject.value;
        const book = currentBooks.find(book => book.id === bookId);
        if (book) {
          subscriber.next(book);
          subscriber.complete();
        } else {
          subscriber.error(new Error(`Book with ID ${bookId} could not be found!`));
        }
      }, 1000);
    })
  }
}
