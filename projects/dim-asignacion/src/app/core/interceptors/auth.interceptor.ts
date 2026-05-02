import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { type HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { NotificacionService } from '../services/notificacion.service';

/**
 * Interceptor HTTP funcional.
 *
 * 1. Inyecta el header Authorization con el JWT (cuando exista).
 * 2. Maneja errores HTTP globales:
 *    - 401 → redirige a login (sesión expirada)
 *    - 403 → redirige a acceso denegado
 *    - 500 → toast de error genérico
 *    - Otros → toast con detalle
 *
 * Se registra en app.config.ts con provideHttpClient(withInterceptors([authInterceptor])).
 */
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);
  const notificacion = inject(NotificacionService);

  // Cuando se conecte el backend, el JWT vendrá en httpOnly cookie
  // y no necesitaremos inyectarlo manualmente.
  // Si se usa localStorage (no recomendado), se haría aquí:
  // const token = localStorage.getItem('cf_token');
  // if (token) { req = req.clone({ setHeaders: { Authorization: `Bearer ${token}` } }); }

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      switch (error.status) {
        case 401:
          notificacion.advertencia('Su sesión ha expirado. Por favor inicie sesión nuevamente.');
          router.navigate(['/inicio']);
          break;
        case 403:
          notificacion.error('No tiene permisos para realizar esta acción.');
          router.navigate(['/acceso-denegado']);
          break;
        case 0:
          notificacion.error('No se pudo conectar con el servidor. Verifique su conexión.');
          break;
        default:
          if (error.status >= 500) {
            notificacion.error('Ocurrió un error interno. Intente nuevamente más tarde.');
          } else {
            const mensaje = (error.error as { detail?: string })?.detail ?? 'Error inesperado';
            notificacion.error(mensaje);
          }
      }
      return throwError(() => error);
    })
  );
};
