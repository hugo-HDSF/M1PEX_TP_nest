import { Injectable, Logger } from '@nestjs/common';
import { ProductsRepository } from './products.repository';
import { Product } from './entities/product.entity';
import { ProductSerializer } from './serializers/product.serializer';

@Injectable()
export class ProductsService {
  private logger = new Logger(ProductsService.name);

  constructor(
    private readonly productsRepository: ProductsRepository,
    private readonly productSerializer: ProductSerializer,
  ) {}

  getProducts(): string {
    const products: Product[] = this.productsRepository.findAll();
    const serializedProducts: string =
      this.productSerializer.serialize(products);
    this.logger.log(this, serializedProducts);
    return serializedProducts;
  }
}
