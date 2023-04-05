import { Module } from '@nestjs/common';
import { BillController } from './bill.controller';
import { BillService } from './bill.service';
import { PDFModule, PDFModuleOptions } from '@t00nday/nestjs-pdf';

@Module({
  imports: [
    PDFModule.registerAsync({
      useFactory: (): PDFModuleOptions => ({
        view: {
          root: '/report/',
          engine: 'ejs',
        },
      }),
    }),
  ],
  controllers: [BillController],
  providers: [BillService],
  exports: [BillModule],
})
export class BillModule {}
