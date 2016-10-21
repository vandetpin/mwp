import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Product } from './product';
import { ProductService } from './product.service';
@Component({
  moduleId: module.id,
  selector: 'my-product',
  styleUrls: ['../app/products.component.css'],
  templateUrl: '/app/products.component.html',
  providers: [ProductService]
})
export class ProductsComponent implements OnInit {
  title = 'Tour of Products';
  products: Product[];
  selectedProduct: Product;

  constructor(private productService : ProductService, private router: Router){}
  getProducts(): void {
    this.productService.getProductsSlowly().then(products => {
      this.products = products
      this.selectedProduct = this.products[1];
    });
  }
  ngOnInit(): void {
    this.getProducts();
  }
  onSelect(product: Product): void {
    this.selectedProduct = product;
  }

  gotoDetail(): void {
        let link = ['/detail', this.selectedProduct.id];
        this.router.navigate(link);
    }
}
