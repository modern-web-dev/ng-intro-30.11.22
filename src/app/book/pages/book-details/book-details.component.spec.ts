import {ComponentFixture, TestBed} from '@angular/core/testing';
import {BookDetailsComponent} from './book-details.component';
import {Book} from '../../model';

describe('BookDetailsComponent', function () {
  let testBook: Book;
  const updatedAuthors = 'Updated Author';
  const updatedTitle = 'Updated Title';

  beforeEach(function () {
    testBook = {
      id: 0, authors: 'Test Author', title: 'Test Title'
    };
  });

  describe('(Class tests)', function () {
    it('notifies on book change', function () {
      // 1. given
      const eventStub: any = {
        preventDefault: jasmine.createSpy('preventDefault'),
        target: {
          querySelector(selector: string) {
            return {value: selector === '#authors' ? updatedAuthors : updatedTitle}
          }
        }
      };

      const component = new BookDetailsComponent();
      component.book = testBook;
      component.bookChange.subscribe(changedBook => {
        // 3. then
        expect(eventStub.preventDefault).toHaveBeenCalled();
        expect(changedBook.id).toBe(testBook.id);
        expect(changedBook.authors).toBe(updatedAuthors);
        expect(changedBook.title).toBe(updatedTitle);
      });
      // 2. when
      component.notifyOnBookChange(eventStub)
    });
  });

  describe('(DOM tests)', function () {
    let fixture: ComponentFixture<BookDetailsComponent>;
    let component: BookDetailsComponent;
    let element: HTMLElement;

    beforeEach(function () {
      return TestBed.configureTestingModule({
        declarations: [BookDetailsComponent]
      }).compileComponents();
    });

    beforeEach(function () {
      fixture = TestBed.createComponent(BookDetailsComponent);
      component = fixture.componentInstance;
      element = fixture.nativeElement as HTMLElement;
    })

    it('sets authors and title in inputs', function () {
      // given
      component.book = testBook;
      const authorsElement = element.querySelector<HTMLInputElement>('#authors');
      const titleElement = element.querySelector<HTMLInputElement>('#title');
      // when
      fixture.detectChanges();
      // then
      expect(authorsElement).not.toBeNull();
      expect(authorsElement?.value).toBe(testBook.authors);
      expect(titleElement?.value).toBe(testBook.title);
    });

    it('notifies on changes when save button clicked', function () {
      // 1. given
      component.book = testBook;
      fixture.detectChanges();
      const authorsElement = element.querySelector<HTMLInputElement>('#authors');
      const titleElement = element.querySelector<HTMLInputElement>('#title');
      component.bookChange.subscribe(changedBook => {
        // 3. then
        expect(changedBook.id).toBe(testBook.id);
        expect(changedBook.authors).toBe(updatedAuthors);
        // expect(changedBook.title).toBe(updatedTitle);
      });
      // 2. when
      if (!authorsElement) {
        throw new Error('Authors element not found');
      }
      authorsElement.value = updatedAuthors;
      // authorsElement.dispatchEvent(new Event('input'));
      const button = element.querySelector<HTMLInputElement>('button');
      button?.click();
    });
  });
});
