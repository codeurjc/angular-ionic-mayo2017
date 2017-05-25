import { Item } from './item.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {

  @Input()
  info: Item;

  @Output()
  deleted = new EventEmitter<Item>();

  @Output()
  updated = new EventEmitter<Item>();

  removeItem() {
    this.deleted.emit(this.info);
  }

  updateItem(value: boolean) {
    this.info.checked = value;
    this.updated.emit(this.info);
  }
}
