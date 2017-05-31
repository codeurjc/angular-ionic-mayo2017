import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Book, BookService } from './book.service';

@Component({
  template: `
  <h2>{{book.title}}</h2>
  <div>
    <label>Id: </label>{{book.id}}
  </div>
  <div>
    <label>Description: </label>{{book.description}}
  </div>
  <p>
    <a [routerLink]="['/books']">Back</a><br>
    <a *ngIf="exists(book.id-1)" [routerLink]="['/book', book.id-1]">&lt;&lt;</a>
    <a *ngIf="exists(book.id+1)" [routerLink]="['/book', book.id+1]">&gt;&gt;</a>

  </p>`
})
export class BookDetailComponent {

  book: Book;

  constructor(private router: Router, activatedRoute: ActivatedRoute, private service: BookService) {
    //const id = activatedRoute.snapshot.params['id'];
    //this.book = service.getBook(id);
    activatedRoute.params.subscribe(params => {
      const id = params['id'];
      this.book = this.service.getBook(id);
    });
  }

  gotoBooks() {
    this.router.navigate(['/books']);
  }

  exists(id: number){
    return this.service.getBook(id) !== undefined;
  }
}
