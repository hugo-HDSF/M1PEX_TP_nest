import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersRepository } from './users.repository';
import { UserSerializer } from './serializers/user.serializer';

@Module({
  imports: [UsersModule],
  providers: [UsersService, UsersRepository, UserSerializer],
  exports: [UsersService],
})
export class UsersModule {}
