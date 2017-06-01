import { Http } from '@angular/http';
import { Component } from '@angular/core';

import { Item } from './item.model';
import { ItemComponent } from './item.component';

const BASE_URL = 'http:///c8055eea.ngrok.io/';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  private items: Item[] = [];

  constructor(private http: Http) { }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.http.get(BASE_URL + 'items/').subscribe(
      response => {
        this.items = response.json();
      },
      error => console.error(error)
    );
  }

  addItem(description: string) {
    const item = { description, checked: false };
    this.http.post(BASE_URL + 'items/', item).subscribe(
      response => this.refresh(),
      error => console.error(error)
    );
  }

  removeItem(item: Item) {
    this.http.delete(BASE_URL + 'items/' + item.id, item).subscribe(
      response => this.refresh(),
      error => console.error(error)
    );
  }

  updateItem(item: Item) {
    this.http.put(BASE_URL + 'items/' + item.id, item).subscribe(
      response => this.refresh(),
      error => console.error(error)
    );
  }
}
