/**
 * Modelo de un caso para consulta (seguimiento).
 * Representa una fila en listar-casos.
 */
export interface CasoConsulta {
  idRadicado: string;
  documento: string;
  nombreAsegurado: string;
  fechaAviso: string;
  estado: string;
  numeroPoliza: string;
  cobertura: string;
  fechaSiniestro: string;
}

/**
 * Gestión individual dentro de una etapa del historial.
 */
export interface GestionHistorial {
  titulo: string;
  responsable: string;
  fecha: string;
  observacion: string;
}

/**
 * Etapa del historial de un caso.
 */
export interface EtapaHistorial {
  label: string;
  completada: boolean;
  activa: boolean;
  gestiones: GestionHistorial[];
}

/**
 * Tiempo por etapa o responsable.
 */
export interface TiempoResumen {
  etapa?: string;
  usuario?: string;
  tiempo: string;
}
