import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const GetCategoryId = createParamDecorator(
  (data: string, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest();
    if (!data) return request.body['categoryId'];
    return request.body[data];
  },
);
