import { Http } from '@angular/http';
import { Item } from './item.model';
import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {

    items: Item[] = [];

    constructor(private http: Http) {
        this.refreshItems();
    }

    private refreshItems() {
        this.http.get('http://127.0.0.1:8080/items/').subscribe(
            response => {
                this.items = response.json();
            },
            error => console.error(error)
        );
    }

    addItem(description: string) {
        const item: Item = { description, checked: false };

        this.http.post('http://127.0.0.1:8080/items/', item).subscribe(
            response => this.refreshItems(),
            error => console.error(error)
        );
    }

    removeItem(item: Item) {

        this.http.delete('http://127.0.0.1:8080/items/' + item.id).subscribe(
            response => this.refreshItems(),
            error => console.error(error)
        );
    }

    updateItem(item: Item) {

        this.http.put('http://127.0.0.1:8080/items/' + item.id, item).subscribe(
            response => this.refreshItems(),
            error => console.error(error)
        );
    }
}
