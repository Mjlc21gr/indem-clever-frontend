import { inject } from '@angular/core';
import { Router, type CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';

/**
 * Guard de autenticación.
 *
 * Verifica que el usuario esté autenticado antes de acceder a una ruta.
 * Si no lo está, redirige a la página de login (cuando exista).
 * Por ahora redirige a inicio.
 */
export const authGuard: CanActivateFn = () => {
  const auth = inject(AuthService);
  const router = inject(Router);

  if (auth.isAuthenticated()) {
    return true;
  }

  // Cuando exista la página de login, redirigir ahí
  return router.createUrlTree(['/inicio']);
};
