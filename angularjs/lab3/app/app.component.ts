import { Component, OnInit } from '@angular/core';

import {Product} from './product';
import {ProductService} from './product.service';


@Component({
  selector: 'my-app',
  templateUrl: '/app/app.component.html',
})
export class AppComponent implements OnInit {
  products : Product[];

  constructor(private productService : ProductService){}

  ngOnInit():void {
    this.productService.getProducts().then(products=>this.products = products);
  }
}
