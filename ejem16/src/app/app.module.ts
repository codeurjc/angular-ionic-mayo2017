import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BooksService } from './books.service';
import { GlobalErrorHandler } from './globalerrorhandler';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, HttpModule, JsonpModule],
  bootstrap: [AppComponent],
  providers: [BooksService, {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler
    }]
})
export class AppModule { }
