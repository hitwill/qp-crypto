import { Body, Controller, Get, Post } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  buy(@Body() message: PubsubMessage) {
    return this.appService.buy();
  }

  @Get('get-account')
  getAccount() {
    return this.appService.getAccount();
  }

  @Post()
  sell(@Body() message: PubsubMessage) {
    return this.appService.sell();
  }
}
