import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {Book} from '../../model';

@Component({
  selector: 'ba-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookDetailsComponent {
  @Input()
  book: Book | undefined;

  @Output()
  bookChange = new EventEmitter<Book>();

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
    this.bookChange.emit(changedBook);
  }
}
