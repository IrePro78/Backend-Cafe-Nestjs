import { ForbiddenException, Injectable } from '@nestjs/common';
import { AddOrderDetailsDto } from './dto';
import { GetBillsResponse, GetReportPdfResponse } from './types';
import { Bill } from './bill.entity';
import * as path from 'path';
import * as ejs from 'ejs';
import { createReadStream, existsSync } from 'fs';
import * as pdf from 'html-pdf';

@Injectable()
export class BillService {
  async addBill(orderDetails: AddOrderDetailsDto): Promise<Bill> {
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

  async generatePDFToFile(bill): Promise<GetReportPdfResponse> {
    const template = await ejs.renderFile(
      path.join(__dirname, '../..', 'report/report.ejs'),
      bill,
    );
    pdf
      .create(template)
      .toFile(`./report/${bill.billId}.pdf`, function (err, res) {
        return res.filename;
      });
    return bill;
  }

  async getReportPdf(billId: string, res): Promise<string> {
    const pathPdfFile = `./report/${billId}.pdf`;
    if (existsSync(pathPdfFile)) {
      res.contentType('application/pdf');
      createReadStream(pathPdfFile).pipe(res);
    }
    const pdf = await Bill.findOne({ where: { billId } });
    await this.generatePDFToFile(pdf);
    if (!existsSync(pathPdfFile)) {
      setTimeout(() => createReadStream(pathPdfFile).pipe(res), 2000);
    }
    return billId;
  }

  async getBills(): Promise<GetBillsResponse> {
    return await Bill.find();
  }

  async removeBill(billId: string): Promise<Bill> {
    const bill = await Bill.findOne({ where: { billId } });
    if (!bill) throw new ForbiddenException('This Bill Does Not Exist');
    return await bill.remove();
  }
}
