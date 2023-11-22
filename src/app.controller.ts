import { Controller, Request, Get } from '@nestjs/common';
import { Public } from './auth/constants';

@Controller()
export class AppController {
  @Public()
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
