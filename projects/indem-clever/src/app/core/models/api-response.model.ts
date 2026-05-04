/**
 * Respuesta genérica del backend.
 * Envuelve cualquier payload con metadata de éxito y mensaje.
 */
export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

/**
 * Respuesta paginada del backend.
 * Contiene el contenido de la página y metadata de paginación.
 */
export interface PaginatedData<T> {
  content: T[];
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
}
