import { Product } from '../entities/product.entity';

export class ProductSerializer {
  serialize(products: Product[]): string {
    return JSON.stringify(products);
  }
}
