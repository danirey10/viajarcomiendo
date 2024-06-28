import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { AuthStatus } from '../interfaces';

export const isAuthenticatedGuard: CanActivateFn = (route, state) => {

  const authService = inject(AuthService);
  const router = inject(Router);

  if(authService.authStatus() == AuthStatus.authenticated || authService.authStatus() == AuthStatus.checking) {
    return true;
  }


  router.navigateByUrl('/auth/');

  return false;

};
