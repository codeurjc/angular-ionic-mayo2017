import { Item } from './item.model';
import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {

    items: Item[] = [];

    addItem(description: string) {
        this.items.push({ description, checked: false });
    }

    removeItem(item: Item) {
        const index = this.items.indexOf(item);
        if (index > -1) {
            this.items.splice(index, 1);
        }
    }
}
