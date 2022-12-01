import {ComponentFixture, TestBed} from '@angular/core/testing';
import {BookDetailsComponent} from '../book-details/book-details.component';
import {BookOverviewComponent} from './book-overview.component';
import {BookService} from '../../services/book.service';
import {of} from 'rxjs';

describe('BookOverviewComponent', function () {
  describe('(DOM tests)', function () {
    let fixture: ComponentFixture<BookOverviewComponent>;
    let component: BookOverviewComponent;
    let element: HTMLElement;

    beforeEach(function () {
      return TestBed.configureTestingModule({
        declarations: [BookOverviewComponent, BookDetailsComponent],
        providers: [{
          provide: BookService, useValue: {
            findAll() {
              return of([]);
            }
          }
        }]
      }).compileComponents();
    });

    beforeEach(function () {
      fixture = TestBed.createComponent(BookOverviewComponent);
      component = fixture.componentInstance;
      element = fixture.nativeElement as HTMLElement;
    });

    it('shows empty table when finds no books', function () {
      // when
      fixture.detectChanges();
      // then
      const rows = element.querySelectorAll<HTMLTableRowElement>('table > tbody > tr');
      expect(rows.length).toBe(0);
    });
  })
});
