import { HttpInterceptorFn } from '@angular/common/http';

export const loggerInterceptor: HttpInterceptorFn = (req, next) => {
  console.log(`interceptor caught a request URL= " + ${req.url}`);
  
  return next(req);
};
