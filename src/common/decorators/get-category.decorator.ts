import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const GetCategory = createParamDecorator(
  (data: string, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest();
    if (!data) return request.body['name'];
    return request.body[data];
  },
);
