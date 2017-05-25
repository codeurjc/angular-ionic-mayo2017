import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  private books: string[] = [];

  constructor(private http: Http) { }

  search(title: string) {

    this.books = [];

    const url = 'https://www.googleapis.com/books/v1/volumes?q=intitle:' + title;

    this.http.get(url).subscribe(
      response => {
        const data = response.json();
        for (const item of data.items) {
          const bookTitle = item.volumeInfo.title;
          this.books.push(bookTitle);
        }
      },
      error => console.error(error)
    );
  }
}
