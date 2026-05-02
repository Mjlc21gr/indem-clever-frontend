/**
 * Tipo de proveedor externo.
 */
export type TipoProveedor = 'uifa' | 'medico' | 'investigador' | 'tecnico';

/**
 * Modelo de un caso asignado a proveedor.
 * Representa una fila en listar-uifa, listar-medico, listar-investigador, listar-tecnico.
 */
export interface CasoProveedor {
  idRadicado: string;
  documento: string;
  nombreAsegurado: string;
  fechaAviso: string;
  estado: string;
  tipoProveedor: TipoProveedor;
  agenteAsignado: string;
  motivoMovilizacion: string;
  fechaAsignacion: string;
  observacionProveedor?: string;
}
