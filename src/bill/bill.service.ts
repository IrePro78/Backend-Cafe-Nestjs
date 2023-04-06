import { Injectable } from '@nestjs/common';
import { AddOrderDetailsDto } from './dto';
import { AddOrderDetailsResponse, GetReportPdfResponse } from './types';
import { Bill } from './bill.entity';
import * as path from 'path';
import * as ejs from 'ejs';
import { createReadStream, existsSync } from 'fs';
import * as pdf from 'html-pdf';

@Injectable()
export class BillService {
  async addBill(
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
    const bill = new Bill();
    bill.name = name;
    bill.email = email;
    bill.contactNumber = contactNumber;
    bill.paymentMethod = paymentMethod;
    bill.totalAmount = totalAmount;
    bill.productDetails = JSON.parse(JSON.stringify(productDetails));
    await bill.save();

    await this.generatePDFToFile(bill);
    return bill;
  }

  async generatePDFToFile(bill): Promise<string> {
    const template = await ejs.renderFile(
      path.join(__dirname, '../..', 'report/report.ejs'),
      bill,
    );
    console.log({ bill });
    return pdf
      .create(template)
      .toFile(`./report/${bill.billId}.pdf`, function (err, res) {
        return res.json;
      });
  }

  async getReportPdf(billId: string, res): Promise<AddOrderDetailsResponse> {
    const pathPdfFile = `./report/${billId}.pdf`;
    const pdf = await Bill.findOne({ where: { billId } });
    console.log({ pdf });
    if (existsSync(pathPdfFile)) {
      res.contentType('application/pdf');
      createReadStream(pathPdfFile).pipe(res);
    } else {
      await this.generatePDFToFile(pdf);
      // res.contentType('application/pdf');
      createReadStream(pathPdfFile).pipe(res);
    }
    return res.body;
  }
}
