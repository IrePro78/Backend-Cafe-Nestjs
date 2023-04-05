import { ForbiddenException, Injectable } from '@nestjs/common';
import { AddOrderDetailsDto } from './dto';
import { AddOrderDetailsResponse } from './types';
import { Bill } from './bill.entity';
import { PDFService } from '@t00nday/nestjs-pdf';
import * as path from 'path';
import ejs from 'ejs';

@Injectable()
export class BillService {
  constructor(private readonly pdfService: PDFService) {}

  async add(
    orderDetails: AddOrderDetailsDto,
  ): Promise<AddOrderDetailsResponse> {
    const {
      name,
      email,
      contactNumber,
      paymentMethod,
      totalAmount,
      productDetails,
    } = orderDetails;
    const report = new Bill();
    report.name = name;
    report.email = email;
    report.contactNumber = contactNumber;
    report.paymentMethod = paymentMethod;
    report.totalAmount = totalAmount;
    report.productDetails = productDetails;
    console.log(__dirname);
    await report.save();
    console.log(JSON.parse(JSON.stringify(productDetails)));

    await ejs.renderFile('./bill/report.ejs', {
      productDetails: JSON.parse(JSON.stringify(productDetails)),
      name: name,
      email: email,
      contactNumber: contactNumber,
      paymentMethod: paymentMethod,
      totalAmount: totalAmount,
    });

    await this.generatePDFToFile(
      'report.ejs',
      `./report/${report.billId}.pdf'`,
    );
    return report;
  }

  async generatePDFToFile(template: string, filename: string) {
    this.pdfService.toFile(template, filename);
  }
}
