import { Injectable } from '@nestjs/common';
import { getAccount } from '@qp-crypto/alpaca/data-access';
@Injectable()
export class AppService {
  buy() {
    return { message: 'Welcome to qp-crypto!' };
  }

  async getAccount() {
    return await getAccount();
  }

  sell() {
    return { message: 'Welcome to qp-crypto!' };
  }
}
