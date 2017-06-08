import { Component } from '@angular/core';
import { BookService } from './book.service';
import { Book } from './book.model';

@Component({
  template: `
    <h2>BOOKS</h2>
    <ul>
      <li *ngFor="let book of books">
        <a [routerLink]="['/book', book.id]">{{book.id}} - {{book.title}}</a>
      </li>
    </ul>
    <br>
    <button [routerLink]="['/book/new']">New Book</button>
  `
})
export class BookListComponent {

  books: Book[] = [];

  constructor(service: BookService) {
    service.getBooks().subscribe(
      books => this.books = books
    );
  }

  newBook() {

  }
}
