export type AddOrderDetailsResponse = {
  name: string;
  email: string;
  contactNumber: string;
  paymentMethod: string;
  totalAmount: number;
  productDetails: any;
};

export type GetReportPdfResponse = AddOrderDetailsResponse;
