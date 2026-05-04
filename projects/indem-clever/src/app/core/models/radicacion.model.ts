/**
 * Modelo de una radicación (caso).
 * Representa una fila en la tabla de listar-radicaciones.
 */
export interface Radicacion {
  idRadicado: string;
  tipoDocumento: string;
  numeroDocumento: string;
  nombreAsegurado: string;
  edad: number;
  correo: string;
  telefono: string;
  numeroPoliza: string;
  codigoProducto: string;
  numeroRiesgo: string;
  fechaAviso: string;
  cobertura: string;
  codCobertura: string;
  portafolioCodigo: string;
  portafolioNombre: string;
  valorAsegurado: number;
  scoreCliente: string;
  estado: string;
  fechaCreacion: string;
  /** Información del siniestro */
  numeroSiniestro: string;
  fechaSiniestro: string;
  ciudadOcurrencia: string;
  causa: string;
  consecuencia: string;
  /** Información bancaria */
  numeroCuenta: string;
  entidadBancaria: string;
  tipoCuenta: string;
}

/**
 * Radicación resumida para la tabla de listado.
 * Coincide con la respuesta del endpoint GET /radicaciones.
 */
export interface RadicacionResumen {
  idRadicado: string;
  numeroPoliza: string;
  fechaAviso: string;
  decision: string;
  cobertura: string;
  tipoPoliza: string;
  estado: string;
}

/**
 * Modelo completo de una radicación (caso).
 * Se usa al consultar el detalle de un caso individual.
 */
export interface Radicacion {
  idRadicado: string;
  tipoDocumento: string;
  numeroDocumento: string;
  nombreAsegurado: string;
  edad: number;
  correo: string;
  telefono: string;
  numeroPoliza: string;
  codigoProducto: string;
  numeroRiesgo: string;
  fechaAviso: string;
  cobertura: string;
  codCobertura: string;
  portafolioCodigo: string;
  portafolioNombre: string;
  valorAsegurado: number;
  scoreCliente: string;
  estado: string;
  fechaCreacion: string;
  /** Información del siniestro */
  numeroSiniestro: string;
  fechaSiniestro: string;
  ciudadOcurrencia: string;
  causa: string;
  consecuencia: string;
  /** Información bancaria */
  numeroCuenta: string;
  entidadBancaria: string;
  tipoCuenta: string;
}
