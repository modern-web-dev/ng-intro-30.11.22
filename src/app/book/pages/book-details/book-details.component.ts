import {Component} from '@angular/core';
import {Book} from '../../model';
import {BookService} from "../../services/book.service";
import {ActivatedRoute, Router} from "@angular/router";
import {map} from "rxjs";
import {FormControl, FormGroup, Validators} from "@angular/forms";

type BookFormType =
  {
    id: FormControl<number>,
    authors: FormControl<string>,
    title: FormControl<string>
  }

@Component({
  selector: 'ba-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent {

  bookForm = new FormGroup<BookFormType>({
    id: new FormControl(0, {nonNullable: true}),
    authors: new FormControl('default authors', {
      nonNullable: true,
      validators: [Validators.required, Validators.maxLength(20)],
    }),
    title: new FormControl('default title', {
      nonNullable: true,
      validators: [Validators.required, Validators.maxLength(20)]
    }),
  });

  book: Book | undefined;

  constructor(private bookService: BookService, private router: Router, private activatedRoute: ActivatedRoute) {
    activatedRoute.data.pipe(
      map(data => data["book"])
    ).subscribe((book) => {
      this.book = book;
      this.bookForm.setValue({id: book.id, authors: book.authors, title: book.title});
    });
  }

  resetForm() {
    this.bookForm.reset();
  }

  updateBook(event: Event) {
    event.preventDefault();

    const changedBook: Book = {
      ...this.book!,
      ...this.bookForm.value
    }
    if (this.book?.id) {
      this.bookService.update(changedBook).subscribe();
    } else {
      this.bookService.add(changedBook)
        .subscribe((book) => this.router.navigate(['..', book.id], {relativeTo: this.activatedRoute}));
    }
  }

  isSaved() {
    return this.bookForm.pristine;
  }
}
