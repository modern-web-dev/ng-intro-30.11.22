import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import {BookDetailsComponent} from "../book/pages/book-details/book-details.component";

@Injectable({
  providedIn: 'root'
})
export class FormSavedGuard implements CanDeactivate<BookDetailsComponent> {
  canDeactivate(component: BookDetailsComponent): boolean {
    return component.isSaved() ? true : confirm("Are you sure?") ;
  }

}
