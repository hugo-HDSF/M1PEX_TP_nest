import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { UsersService } from '../../models/users/users.service';

@Injectable()
export class UserMiddleware implements NestMiddleware {
  constructor(private readonly usersService: UsersService) {}
  use(req: Request, res: Response, next: NextFunction) {
    const authHeader: string = req.headers.authorization;

    if (authHeader) {
      const base64Credentials: string = authHeader.split(' ')[1];
      const credentials: string = Buffer.from(
        base64Credentials,
        'base64',
      ).toString('ascii');
      const [login, password] = credentials.split(':');

      if (this.usersService.connect(login, password)) {
        (req as any).user = { login, password };
        next();
        return;
      }
    }

    res.setHeader(
      'WWW-Authenticate',
      'Basic realm="Access to the products API", charset="UTF-8"',
    );
    res.status(401).json({ message: 'Unauthorized' });
  }
}
