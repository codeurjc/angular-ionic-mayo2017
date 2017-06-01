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

  private items: Item[] = [];

  constructor(private service: ItemsService) { }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.service.getItems().subscribe(
      items => this.items = items,
      error => console.error(error)
    );
  }

  addItem(description: string) {
    const item = { description, checked: false };
    this.service.addItem(item).subscribe(
      response => this.refresh(),
      error => console.error(error)
    );
  }

  removeItem(item: Item) {
    this.service.removeItem(item).subscribe(
      response => this.refresh(),
      error => console.error(error)
    );
  }

  updateItem(item: Item) {
    this.service.updateItem(item).subscribe(
      response => this.refresh(),
      error => console.error(error)
    );
  }
}
