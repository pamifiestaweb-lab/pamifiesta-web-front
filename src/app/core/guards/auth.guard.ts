import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);
  const loggedIn = false; // tu lógica real aquí
  if (!loggedIn) {
    return router.parseUrl('/');
  }
  return true;
};
