import {Component} from '@angular/core';
import {Book} from '../../model';
import {BookService} from "../../services/book.service";
import {ActivatedRoute, Router} from "@angular/router";
import {map} from "rxjs";

@Component({
  selector: 'ba-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent {

  book: Book | undefined;

  saved = false;
  constructor(private  bookService: BookService, private  router: Router, private activatedRoute: ActivatedRoute) {
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
    if(this.book?.id){
      this.bookService.update(changedBook).subscribe();
    }else{
      this.bookService.add(changedBook)
        .subscribe((book)=> this.router.navigate(['..', book.id], {relativeTo: this.activatedRoute}));
    }
  }
  isSaved(){
    return this.saved;
  }
}
