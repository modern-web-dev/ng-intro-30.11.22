import {Book} from '../model';
import { Observable} from 'rxjs';
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable()
export class BookService {
  constructor(private httpClient:HttpClient) {
  }

  findAll(): Observable<Book[]> {
    return this.httpClient.get<Book[]>('/api/books');
  }

  update(book: Book): Observable<Book> {
    return this.httpClient.put<Book>(`/api/books/${book.id}`, book);
  }
  add(book: Book): Observable<Book> {
    return this.httpClient.post<Book>(`/api/books`, book);
  }

  findById(bookId: number): Observable<Book> {
    return this.httpClient.get<Book>(`/api/books/${bookId}`);
  }
}
