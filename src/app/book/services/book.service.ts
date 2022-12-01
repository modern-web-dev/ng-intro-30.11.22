import {Book} from '../model';
import {Observable} from 'rxjs';

// type FindByIdCallbackFn = (book: Book) => void;

export class BookService {
  private readonly books = [
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

  constructor() {
    console.log('BookService Created...');
  }

  findAll(): Book[] {
    return this.books;
  }

  findById(bookId: number): Observable<Book> {
    return new Observable<Book>(subscriber => {
      setTimeout(() => {
        const book = this.books.find(book => book.id === bookId);
        if (book) {
          subscriber.next(book);
          subscriber.complete();
        } else {
          subscriber.error(new Error(`Book with ID ${bookId} could not be found!`));
        }
      }, 1000);
    })


    // return fetch(`books/${bookId}`)
    //   .then(response => response.json());
    // return new Promise<Book>((resolve, reject) => {
    //   // setTimeout(() => {
    //     const book = this.books.find(book => book.id === bookId);
    //     if (!book) {
    //       reject(new Error(`Book with ID ${bookId} could not be found!`))
    //     } else {
    //       resolve(book);
    //     }
    //   // });
    // });
  }

  search(query: string): Observable<string[]> {
    return new Observable<string[]>(observer => {
      setTimeout(() => {
        observer.next([
          `${query} ...`,
          `${query} .......`,
          `${query} ...........`,
          `${query} ................`,
        ]);
        observer.complete();
      }, 700);
    });
  }
}

// const service = new BookService();
// 1. sync
// try {
//   const book = service.findById(123);
//   console.log(book);
//   return book;
// } catch (e) {
//   console.error(e);
//   throw e;
// }
// return undefined;

// 2. async (callbacks)
// service.findById(123,
//   function (book) {
//     console.log(book);
//     service.findById(646, book2 => {
//
//     })
//   });
console.log('End');

// 3. async (Promises)
// service.findById(123)
//   .then(
//     function (book) {
//       console.log(book);
//     },
//     error => {
//       console.error(error);
//       return Promise.reject();
//     }
//   )
// console.log("End");

// async function f() {
//   try {
//     const book = await service.findById(123);
//     console.log(book);
//   } catch (e) {
//     console.error(e);
//     throw e;
//   }
// }

// 4. async (Observables RxJS)
// const book$ = service.findById(113)
//   .pipe(map(book => book.id));
// const subscription: Subscription = book$
//   .subscribe({
//     next(book) {
//       console.log(book);
//     },
//     error(error) {
//       console.error(error);
//     },
//     complete() {
//       console.error('Done..');
//     }
//   })
//
// subscription.unsubscribe();

