import { Pipe, PipeTransform } from '@angular/core';

import {Product} from './product';

@Pipe({name: 'calculatePrice'})
export class calculatePricePip implements PipeTransform {
  transform(product: Product): number {
    return product.price * product.qty;
  }
}