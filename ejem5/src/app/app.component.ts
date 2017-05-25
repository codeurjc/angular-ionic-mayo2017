import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  name = 'Anybody';

  num = 2;
  visible = false;

  birthday = new Date();

  elems = [
    { desc: 'Elem1', check: true },
    { desc: 'Elem2', check: true },
    { desc: 'Elem3', check: false }
  ];

  isValid = true;

  toggleText() {
    this.visible = !this.visible;
    this.num = this.num === 3 ? 2 : 3;
  }
}
