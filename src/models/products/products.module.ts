import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { ProductsRepository } from './products.repository';
import { ProductSerializer } from './serializers/product.serializer';
import { UserMiddleware } from '../../common/middlewares/user.middleware';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [ProductsModule, UsersModule],
  controllers: [ProductsController],
  providers: [ProductsService, ProductsRepository, ProductSerializer],
})
export class ProductsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(UserMiddleware).forRoutes(ProductsController);
  }
}
