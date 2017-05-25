import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  input: string;
  items: string[] = [];

  addToPage() {
    this.items.push(this.input);
    this.input = '';
  }
}
