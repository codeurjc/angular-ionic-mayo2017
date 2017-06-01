import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Item } from './item.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html'
})
export class ItemComponent {

  @Input()
  private item: Item;

  @Output()
  private remove = new EventEmitter<any>();

  @Output()
  private update = new EventEmitter<any>();

  fireRemove() {
    this.remove.emit();
  }

  checkedChanged() {
    this.item.checked = !this.item.checked;
    this.update.emit();
  }
}
