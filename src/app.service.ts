import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {}

  getRoutes(): string {
    const host = this.configService.get<string>('HOST');
    const port = this.configService.get<string>('PORT');
    const route = this.configService.get<string>('ROUTE');
    return `go to ${host}:${port}/${route} to see the products list (PS: make sur to authenticate using given credentials)`;
  }
}
