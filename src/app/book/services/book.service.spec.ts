import {TestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {BookService} from "./book.service";

fdescribe('BookService', () => {
  let bookService!: BookService;
  let httpTestingController!: HttpTestingController;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BookService]
    }).compileComponents();
    bookService = TestBed.inject(BookService)
    httpTestingController = TestBed.inject(HttpTestingController)
  });

  it('should read books from server', () => {
    const  serverBooks = [{id: 3, authors: "string", title: "string"}];
    bookService.findAll().subscribe((books)=>{
      expect(books[0].id).toBe(serverBooks[0].id);
    });
    // bookService.findById(1).subscribe();

    httpTestingController.expectOne("/api/books").flush(serverBooks);


    httpTestingController.verify();
  });

  it('should receive not found error', () => {

    bookService.findById(1).subscribe({
      error: console.log
    });

    httpTestingController.expectOne("/api/books/1").flush(null, {status: 404, statusText:'Not Found'})

    httpTestingController.verify();
  });
});
