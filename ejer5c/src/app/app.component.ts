import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http';
import { Component } from '@angular/core';

import { Item } from './item.model';
import { ItemComponent } from './item.component';
import { ItemsService } from './items.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  private items: Observable<Item[]>;

  constructor(private service: ItemsService) { }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.items = this.service.getItems();
  }

  addItem(description: string) {
    const item = { description, checked: false };
    this.refreshWhenFinish(this.service.addItem(item));
  }

  removeItem(item: Item) {
    this.refreshWhenFinish(this.service.removeItem(item));
  }

  updateItem(item: Item) {
    this.refreshWhenFinish(this.service.updateItem(item));
  }

  refreshWhenFinish(items: Observable<Item[]>) {
    items.subscribe(_ => this.refresh());
  }
}
