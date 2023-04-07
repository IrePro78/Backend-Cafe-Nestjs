export type Bill = {
  name: string;
  email: string;
  contactNumber: string;
  paymentMethod: string;
  totalAmount: number;
  productDetails: any;
};

export type AddReportPdfResponse = Bill;

export type GetReportPdfResponse = Bill;

export type GetBillsResponse = Bill[];

export type RemoveBillResponse = Bill;
