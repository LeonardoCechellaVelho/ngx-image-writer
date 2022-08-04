
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ImageWriterModule } from 'image-writer';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ImageWriterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
