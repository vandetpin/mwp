import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }   from './app.component';
import {calculatePricePip} from './calculate-price.pip';
import {ProductService} from './product.service';

@NgModule({
  imports:      [ BrowserModule,FormsModule ],
  declarations: [ AppComponent, calculatePricePip ],
  bootstrap:    [ AppComponent ],
  providers: [ProductService]
})
export class AppModule { }
