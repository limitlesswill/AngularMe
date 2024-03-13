import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserAuthService } from '../Services/user/user-auth.service';

export const userAuthGuard: CanActivateFn = (route, state) => {

  const authService = inject(UserAuthService);
  const router = inject(Router);

  if (authService.UserState) {
    return true;
  }
  else {
    alert('Access Denied')
    // router.navigate(['/home']);
    return false;
  }


};
