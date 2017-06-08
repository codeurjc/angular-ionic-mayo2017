import { Observable } from 'rxjs/Rx';
import { Book } from './book.model';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';

const BASE_URL = 'http://localhost:4200/';

@Injectable()
export class BookService {

  constructor(private http: Http) { }

  getBooks() {
    return this.http.get(BASE_URL + 'books/').map(
      response => response.json());
  }

  getBook(id: number) {
    return this.http.get(BASE_URL + 'books/' + id).map(
      response => response.json());
  }

  addBook(book: Book) {
    return this.http.post(BASE_URL + 'books/', book).map(
      response => response.json());
  }

  removeBook(book: Book) {
    return this.http.delete(BASE_URL + 'books/' + book.id, book).map(
      response => response.json());
  }

  updateBook(book: Book) {
    return this.http.put(BASE_URL + 'books/' + book.id, book).map(response => response.json()
    );
  }

}
