import './rxjs-extensions';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';


import { InMemoryWebApiModule } from 'angular-in-memory-web-api/in-memory-web-api.module';
import { InMemoryDataService }  from './in-memory-data.service';


import { AppComponent }  from './app.component';


import { ProductDetailComponent } from './product-detail.component';
import { ProductsComponent } from './products.component';
import { ProductSearchComponent } from './product-search.component';
import { DashboardComponent } from './dashboard.component';
import { ProductService } from './product.service';

import { AppRoutingModule }   from './app-routing.module';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule],
  declarations: [
    AppComponent,
    ProductDetailComponent,
    ProductSearchComponent,
    ProductsComponent,
    DashboardComponent
  ],
  providers: [ProductService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
