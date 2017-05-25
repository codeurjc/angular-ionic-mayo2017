import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    .red { color: red; }
    .blue { color: blue; }
    .yellow { color: yellow; }
    .bold { font-weight: bold; }   
  `],
  /*styleUrls: ['./app.component.css']*/
})
export class AppComponent {

  name = 'Anybody';

  className = 'red';
  redActive = true;

  pClasses = {
    red: true,
    bold: false
  };

  setClass(className: string) {
    this.className = className;
    this.redActive = (className === 'red');
  }

  changeParagraph() {
    this.pClasses.bold = true;
  }
}
