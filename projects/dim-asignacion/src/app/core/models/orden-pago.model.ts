/**
 * Modelo de una orden de pago.
 * Representa una fila en listar-pagos.
 */
export interface OrdenPago {
  idRadicado: string;
  documento: string;
  nombreAsegurado: string;
  valorPago: number;
  estado: string;
  fechaCreacion: string;
  aprobadoPor?: string;
  fechaAprobacion?: string;
}

/**
 * Modelo de una objeción.
 * Representa una fila en listar-otros (objeciones).
 */
export interface Objecion {
  idRadicado: string;
  documento: string;
  nombreAsegurado: string;
  valorObjecion: number;
  estado: string;
  fechaCreacion: string;
  motivoObjecion?: string;
}
