import { Product } from './entities/product.entity';
import productsJSON from '../../database/products.json';
import { Injectable } from '@nestjs/common';
import { ProductI } from './interfaces/product.interface';

@Injectable()
export class ProductsRepository {
  constructor() {}

  findAll(): Product[] {
    const typedProducts: ProductI[] = productsJSON as ProductI[];
    return typedProducts.map((productJson: ProductI) => {
      return new Product(productJson);
    });
  }
}
