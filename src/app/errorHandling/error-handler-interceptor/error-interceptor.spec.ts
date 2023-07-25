import { Router } from '@angular/router';
import { ErrorInterceptor } from './error-interceptor';

describe('ErrorInterceptor', () => {
  it('should create an instance', () => {
    expect(new ErrorInterceptor(new Router)).toBeTruthy();
  });
});
