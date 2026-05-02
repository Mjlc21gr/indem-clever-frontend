import { Injectable, signal, computed } from '@angular/core';
import type { Usuario, RolUsuario } from '../models';

/**
 * Usuario stub para desarrollo.
 * TODO: Eliminar cuando se conecte el backend.
 * El usuario real vendrá del JWT decodificado tras el login.
 */
const USUARIO_STUB: Usuario = {
  id: '1',
  nombre: 'Jorge Morales',
  correo: 'dev@segurosbolivar.com',
  rol: 'admin',
};

/**
 * Servicio de autenticación.
 *
 * STUB: Simula un usuario autenticado con rol.
 * Cuando se conecte el backend, este servicio:
 * - Llamará al endpoint de login
 * - El JWT se almacenará en httpOnly cookie (manejado por el backend)
 * - Decodificará el token para obtener el usuario
 */
@Injectable({ providedIn: 'root' })
export class AuthService {
  /** Usuario autenticado actual. null = no autenticado. */
  private readonly _usuario = signal<Usuario | null>(USUARIO_STUB);

  /** Usuario reactivo (solo lectura). */
  readonly usuario = this._usuario.asReadonly();

  /** Si hay un usuario autenticado. */
  readonly isAuthenticated = computed(() => this._usuario() !== null);

  /** Rol del usuario actual. */
  readonly rol = computed(() => this._usuario()?.rol ?? null);

  /** Nombre del usuario para mostrar en el topbar. */
  readonly nombreUsuario = computed(() => this._usuario()?.nombre ?? 'Usuario');

  /**
   * Verifica si el usuario tiene uno de los roles indicados.
   * @param roles - Roles permitidos.
   * @returns true si el usuario tiene al menos uno de los roles.
   */
  hasRole(...roles: RolUsuario[]): boolean {
    const currentRol = this.rol();
    return currentRol !== null && roles.includes(currentRol);
  }

  /**
   * TODO: Conectar al backend.
   * Llamará POST /auth/login y el backend seteará la httpOnly cookie.
   * Luego se decodifica el JWT para obtener el usuario.
   */
  login(_correo: string, _password: string): void {
    this._usuario.set(USUARIO_STUB);
  }

  /** Cierra sesión. Limpia el estado del usuario. */
  logout(): void {
    this._usuario.set(null);
  }
}
