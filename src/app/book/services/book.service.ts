import {Book} from '../model';
import { Observable} from 'rxjs';
import {HttpClient} from "@angular/common/http";
import {Inject, Injectable} from "@angular/core";
import {BASE_URL} from "../../core/base-url.token";

@Injectable()
export class BookService {
  constructor(private httpClient:HttpClient,  @Inject(BASE_URL) private contextUrl:string) {
  }

  findAll(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(`${this.contextUrl}/books`);
  }

  update(book: Book): Observable<Book> {
    return this.httpClient.put<Book>(`${this.contextUrl}/books/${book.id}`, book);
  }
  add(book: Book): Observable<Book> {
    return this.httpClient.post<Book>(`${this.contextUrl}/books`, book);
  }

  findById(bookId: number): Observable<Book> {
    return this.httpClient.get<Book>(`${this.contextUrl}/books/${bookId}`);
  }
}
