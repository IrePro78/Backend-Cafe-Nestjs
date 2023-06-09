import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const GetProductId = createParamDecorator(
  (data: string, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest();
    if (!data) return request.body['productId'];
    return request.body[data];
  },
);
