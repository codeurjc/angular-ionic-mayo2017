import { Item } from './../item.model';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {

  @Input()
  model: Item;

  @Output()
  deleted = new EventEmitter<Item>();

  fireDeleted() {
    this.deleted.emit(this.model);
  }

}
