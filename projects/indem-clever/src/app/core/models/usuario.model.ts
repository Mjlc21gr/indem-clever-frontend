/**
 * Roles disponibles en el sistema.
 * admin: líder que aprueba pagos, gestiona usuarios.
 * gestor: radicador, analista, proveedor.
 */
export type RolUsuario = 'admin' | 'gestor';

/**
 * Modelo del usuario autenticado.
 * Viene del backend (JWT decodificado).
 */
export interface Usuario {
  id: string;
  nombre: string;
  correo: string;
  rol: RolUsuario;
  avatar?: string;
}
