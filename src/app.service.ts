import { Injectable } from '@nestjs/common';
import process from 'process';

@Injectable()
export class AppService {
  getHello(): string {
    console.log(process.env.SECRETKEY);
    return 'Hello Cafe';
  }
}
