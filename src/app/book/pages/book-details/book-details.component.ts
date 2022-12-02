import {Component} from '@angular/core';
import {Book} from '../../model';
import {BookService} from "../../services/book.service";
import {ActivatedRoute} from "@angular/router";
import {map} from "rxjs";

@Component({
  selector: 'ba-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent {

  book: Book | undefined;

  saved = false;
  constructor(bookService: BookService, activatedRoute: ActivatedRoute) {
   activatedRoute.data.pipe(
      map(data => data["book"])
    ).subscribe((book)=>{
     this.book= book;
    });
  }

  notifyOnBookChange(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const authorsInput = form?.querySelector?.<HTMLInputElement>('#authors');
    const titleInput = form?.querySelector?.<HTMLInputElement>('#title');
    const changedBook: Book = {
      ...this.book!,
      authors: authorsInput?.value || '',
      title: titleInput?.value || ''
    }
    this.saved = true;
    console.log(changedBook);
  }
  isSaved(){
    return this.saved;
  }
}
