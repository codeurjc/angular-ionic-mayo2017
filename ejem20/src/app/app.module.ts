import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import {
  MdButtonModule, MdCheckboxModule, MdInputModule, MdMenuModule, MdSidenavModule,
  MdDialogModule, MdSnackBarModule, MdCardModule, MdToolbarModule, MdRadioModule, MdSelectModule, MdSliderModule,
  MdSlideToggleModule, MdListModule, MdGridListModule, MdTabsModule, MdButtonToggleModule, MdChipsModule,
  MdIconModule, MdProgressSpinnerModule, MdProgressBarModule, MdTooltipModule
} from '@angular/material';

import { AppComponent, DialogContent } from './app.component';

@NgModule({
  declarations: [AppComponent, DialogContent],
  imports: [MdButtonModule, MdCheckboxModule, MdInputModule, MdMenuModule, MdSidenavModule,
    MdDialogModule, MdSnackBarModule, MdCardModule, MdToolbarModule, MdRadioModule, MdSelectModule, MdSliderModule,
    MdSlideToggleModule, MdListModule, MdGridListModule, MdTabsModule, MdButtonToggleModule, MdChipsModule,
    MdIconModule, MdProgressSpinnerModule, MdProgressBarModule, MdTooltipModule, BrowserModule, FormsModule, NoopAnimationsModule],
  entryComponents: [DialogContent],
  bootstrap: [AppComponent]
})
export class AppModule { }
