import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }   from './app.component';
import { ProductFormComponent }   from './product-form.component';

@NgModule({
  imports:      [ BrowserModule,FormsModule ],
  declarations: [ AppComponent, ProductFormComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
