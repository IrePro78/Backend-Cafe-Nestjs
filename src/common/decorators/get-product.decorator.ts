import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const GetProduct = createParamDecorator(
  (data: string, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest();
    if (!data) return request.body;
    return request.body[data];
  },
);
