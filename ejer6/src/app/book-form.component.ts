import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BookService } from './book.service';
import { Book } from './book.model';

@Component({
  template: `
  <h2>{{book.title}}</h2>
  <div>
    <label>Title: </label><input type="text" [(ngModel)]="book.title">
  </div>
  <div>
    <label>Description: </label><textarea [(ngModel)]="book.description"></textarea>
  </div>
  <p>
    <button (click)="gotoBooks()">Cancel</button>
    <button (click)="saveBook()">Save</button>
  </p>`
})
export class BookFormComponent {

  book: Book = { title: '', description: '' };

  constructor(private router: Router, activatedRoute: ActivatedRoute, private service: BookService) {
    const id = activatedRoute.snapshot.params['id'];
    if (id) {
      service.getBook(id).subscribe(
        book => this.book = book);
    }
  }

  gotoBooks() {
    this.router.navigate(['/library']);
  }

  saveBook() {
    if (this.book.id) {
      this.service.updateBook(this.book).subscribe(
        _ => this.router.navigate(['/book', this.book.id]));
    } else {
      this.service.addBook(this.book).subscribe(
        book => this.router.navigate(['/book', book.id]));
    }
  }
}
