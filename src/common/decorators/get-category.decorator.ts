import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const GetCategory = createParamDecorator(
  (data: string | undefined, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest();
    if (!data) return request.category;
    console.log(request);
    return request.category[data];
  },
);
