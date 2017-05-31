import { Component } from '@angular/core';

interface Item {
  description: string;
  checked: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  elems: Item[] = [];
  elem: string;

  addElement() {
    this.elems.push({ description: this.elem, checked: false });
    this.elem = '';
  }

  delete(elem: Item) {
    const index = this.elems.indexOf(elem);
    if (index !== -1) {
      this.elems.splice(index, 1);
    }
  }

}
