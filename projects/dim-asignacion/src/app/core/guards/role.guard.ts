import { inject } from '@angular/core';
import { Router, type CanActivateFn, type ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';
import type { RolUsuario } from '../models';

/**
 * Guard de roles.
 *
 * Verifica que el usuario tenga uno de los roles requeridos.
 * Se configura en la ruta con `data: { roles: ['admin'] }`.
 * Si no tiene el rol, redirige a acceso-denegado.
 */
export const roleGuard: CanActivateFn = (route: ActivatedRouteSnapshot) => {
  const auth = inject(AuthService);
  const router = inject(Router);

  const requiredRoles = (route.data['roles'] as RolUsuario[]) ?? [];

  if (requiredRoles.length === 0 || auth.hasRole(...requiredRoles)) {
    return true;
  }

  return router.createUrlTree(['/acceso-denegado']);
};
