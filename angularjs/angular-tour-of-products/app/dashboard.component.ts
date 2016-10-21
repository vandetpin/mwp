import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Product } from './product';
import { ProductService } from './product.service';

@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: '/app/dashboard.component.html',
  styleUrls : ['../app/dashboard.component.css']
})
export class DashboardComponent implements OnInit{
    products: Product[];

    constructor(private productService : ProductService, private router: Router){}
    gotoDetail(product: Product): void {
        let link = ['/detail', product.id];
        this.router.navigate(link);
    }

    getProducts(): void {
        this.productService.getProductsSlowly().then(products => {
        this.products = products;
        });
    }
    ngOnInit(): void {
        this.getProducts();
    }
}
