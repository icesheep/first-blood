// 在你的服务或控制器中使用环境变量
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const dbHost = process.env.DB_HOST || 'defaultHost';
    const dbPort = process.env.DB_PORT || 'defaultPort';
    return `Hello! Database is running at ${dbHost}:${dbPort}`;
  }
}
