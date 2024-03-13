import { HttpInterceptorFn } from '@angular/common/http';

export const loggerInterceptor: HttpInterceptorFn = (req, next) => {
  console.log(`test interceptor URL= " + ${req.url}`);
  
  return next(req);
};
