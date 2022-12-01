import {Book} from '../model';

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
}
