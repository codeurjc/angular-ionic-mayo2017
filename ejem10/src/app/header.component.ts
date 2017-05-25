import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {

    @Output()
    hidden = new EventEmitter<boolean>();

    visible = true;

    click() {
        this.visible = !this.visible;
        this.hidden.emit(this.visible);
    }
}
