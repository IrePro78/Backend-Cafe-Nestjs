import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const GetOrderId = createParamDecorator(
  (data: string, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest();
    if (!data) return request.body['billId'];
    return request.body[data];
  },
);
