/**
 * Modelo de un caso en análisis.
 * Representa una fila en listar-analisis, listar-analisis-linea, listar-mis-analisis.
 */
export interface Analisis {
  idRadicado: string;
  documento: string;
  nombreAsegurado: string;
  fechaAviso: string;
  estado: string;
  analista: string;
  prioridad: string;
  lineaNegocio: string;
  /** Decisión tomada por el analista */
  decision?: string;
  causal?: string;
  observacionAnalista?: string;
}
