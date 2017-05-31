import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  elems: string[] = [];
  elem: string;

  addElement() {
    this.elems.push(this.elem);
    this.elem = '';
  }

}
