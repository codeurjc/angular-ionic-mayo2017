import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BookService } from './book.service';
import { Book } from './book.model';

@Component({
  template: `
  <h2>{{book?.title}}</h2>
  <div>
    <label>Id: </label>{{book?.id}}
  </div>
  <div>
    <label>Description: </label>{{book?.description}}
  </div>
  <p>
    <button (click)="deleteBook()">Borrar</button>

    <button (click)="router.navigate(['/book/edit',book?.id])">Edit</button>
    <br>
    <button (click)="gotoBooks()">Back</button>
  </p>`
})
export class BookDetailComponent {

  book: Book;

  constructor(public router: Router, activatedRoute: ActivatedRoute, private service: BookService) {
    const id = activatedRoute.snapshot.params['id'];
    service.getBook(id).subscribe(
      book => this.book = book);
  }

  gotoBooks() {
    this.router.navigate(['/library']);
  }

  deleteBook() {
    if(confirm('Do you want to remove this book?')){
      this.service.removeBook(this.book).subscribe(
        _ => this.router.navigate(['/library'])
      );
    }
  }
}
