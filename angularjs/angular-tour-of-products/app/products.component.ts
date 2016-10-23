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
    this.productService.getProducts().then(products => {
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

  delete(product: Product): void {
    this.productService
        .delete(product.id)
        .then(() => {
          this.products = this.products.filter(h => h !== product);
          if (this.selectedProduct === product) { this.selectedProduct = null; }
        });
  }
  

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.productService.create(name)
      .then(product => {
        this.products.push(product);
        this.selectedProduct = null;
      });
  }
}
