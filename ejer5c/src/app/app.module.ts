import { GlobalErrorHandler } from './error.handler';
import { ItemsService } from './items.service';
import { HttpModule, JsonpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppComponent } from './app.component';
import { ItemComponent } from './item.component';

@NgModule({
  declarations: [AppComponent, ItemComponent],
  imports: [BrowserModule, FormsModule, HttpModule, JsonpModule],
  bootstrap: [AppComponent],
  providers: [ItemsService, {
    provide: ErrorHandler,
    useClass: GlobalErrorHandler
  }]
})
export class AppModule { }
