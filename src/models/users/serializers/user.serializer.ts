import { User } from '../entities/user.entity';

export class UserSerializer {
  serialize(user: User): string {
    return JSON.stringify(user);
  }
}
