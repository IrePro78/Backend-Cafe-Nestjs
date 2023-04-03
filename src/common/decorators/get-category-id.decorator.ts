import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const GetCategoryId = createParamDecorator(
  (data: undefined, context: ExecutionContext): string => {
    const request = context.switchToHttp().getRequest();
    return request.category['categoryId'];
  },
);
