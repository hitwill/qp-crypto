import { Injectable } from '@nestjs/common';
import { Interval, Timeout } from '@nestjs/schedule';
import { startWatch } from '@qp-crypto/google/data-access';

@Injectable()
export class TasksService {
  @Interval(86_400_000)
  resetGmailListener() {
    startWatch();
  }

  @Timeout(5000)
  startGmailListener() {
    startWatch();
  }
}
