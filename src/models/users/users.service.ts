import { Injectable, Logger } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { User } from './entities/user.entity';
import { UserSerializer } from './serializers/user.serializer';

@Injectable()
export class UsersService {
  private logger = new Logger(UsersService.name);

  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly userSerializer: UserSerializer,
  ) {}

  connect(login: string, password: string): string {
    const user: User = this.usersRepository.connect(login, password);
    if (this.isAdmin(user)) {
      const serializedUser: string = this.userSerializer.serialize(user);
      this.logger.log(this, serializedUser);
      return serializedUser;
    } else {
      return undefined;
    }
  }

  private isAdmin(user: User): boolean {
    return user && user.admin;
  }
}
