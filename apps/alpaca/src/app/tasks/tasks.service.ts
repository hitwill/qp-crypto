import { Injectable } from '@nestjs/common';
import { Timeout } from '@nestjs/schedule';
import { listen } from '@qp-crypto/shared/data-access/imap';

@Injectable()
export class TasksService {
  @Timeout(5000)
  startListener() {
    listen();
  }
}
