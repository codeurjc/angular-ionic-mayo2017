import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { BooksService } from './books.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  private books: Observable<string>;

  constructor(private service: BooksService) { }

  search(title: string) {
    this.books = this.service.getBooks(title);
  }
}
