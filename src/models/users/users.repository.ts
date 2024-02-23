import { User } from './entities/user.entity';
import usersJSON from '../../database/users.json';
import { Injectable } from '@nestjs/common';
import { UserI } from './interfaces/user.interface';

@Injectable()
export class UsersRepository {
  constructor() {}

  connect(login: string, password: string): User {
    const users: UserI[] = usersJSON;
    const user: UserI = users.find(
      (user: UserI) => user.login === login && user.password === password,
    );
    return new User(user);
  }
}
