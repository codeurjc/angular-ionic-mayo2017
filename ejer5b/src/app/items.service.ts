import { Observable } from 'rxjs/Rx';
import { Item } from './item.model';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';

const BASE_URL = 'http://c8055eea.ngrok.io/';

@Injectable()
export class ItemsService {

  constructor(private http: Http) { }

  getItems() {
    return this.http.get(BASE_URL + 'items/').map(
      response => response.json());
  }

  addItem(item: Item) {
    return this.http.post(BASE_URL + 'items/', item).map(
      response => response.json());
  }

  removeItem(item: Item): Observable<Item> {
    return this.http.delete(BASE_URL + 'items/' + item.id, item).map(
      response => response.json());
  }

  updateItem(item: Item) {
    return this.http.put(BASE_URL + 'items/' + item.id, item).map(response => response.json()
    );
  }

}
