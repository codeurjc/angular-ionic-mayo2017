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
