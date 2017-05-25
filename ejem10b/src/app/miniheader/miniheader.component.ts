import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-miniheader',
  templateUrl: './miniheader.component.html'
})
export class MiniheaderComponent implements OnInit {

  @Output()
  miniEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      console.log('emited');
      this.miniEvent.emit('Hola');
    }, 2000);
  }

}
