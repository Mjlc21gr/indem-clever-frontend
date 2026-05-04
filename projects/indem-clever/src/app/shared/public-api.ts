/**
 * Shared Library — Clever Indem
 * Punto único de entrada.
 */

// Tabla Dinámica
export { TablaDinamicaComponent } from './components/tabla-dinamica/tabla-dinamica.component';
export type { ColumnaTabla, FilaSeleccionada, AccionFila } from './components/tabla-dinamica/tabla-dinamica.component';

// Secciones Genéricas
export { SeccionFormularioDinamicoComponent } from './components/secciones/seccion-formulario-dinamico/seccion-formulario-dinamico.component';
export type { CampoFormulario } from './components/secciones/seccion-formulario-dinamico/seccion-formulario-dinamico.component';
export { SeccionObservacionesGenericaComponent } from './components/secciones/seccion-observaciones-generica/seccion-observaciones-generica.component';
export { SeccionPanelGenericoComponent } from './components/secciones/seccion-panel-generico/seccion-panel-generico.component';

// Secciones Específicas
export { SeccionArchivosComponent } from './components/secciones/seccion-archivos/seccion-archivos.component';
export { SeccionDerivacionComponent } from './components/secciones/seccion-derivacion/seccion-derivacion.component';
export { SeccionConsultaComponent } from './components/secciones/seccion-consulta/seccion-consulta.component';
export { SeccionDecisionComponent } from './components/secciones/seccion-decision/seccion-decision.component';
export { SeccionAnalisisIaComponent } from './components/secciones/seccion-analisis-ia/seccion-analisis-ia.component';
export { SeccionChecklistComponent } from './components/secciones/seccion-checklist/seccion-checklist.component';
export { SeccionLineaTiempoComponent } from './components/secciones/seccion-linea-tiempo/seccion-linea-tiempo.component';
export type { EtapaLineaTiempo, GestionEtapa } from './components/secciones/seccion-linea-tiempo/seccion-linea-tiempo.component';

// Botones
export { BotonAccionComponent } from './components/boton-accion/boton-accion.component';

// Diálogos
export { DialogoConfirmacionComponent } from './components/dialogo-confirmacion/dialogo-confirmacion.component';

// Mocks
export { MOCK_RADICACIONES } from './mocks/mock-radicaciones.data';
export { MOCK_ANALISIS } from './mocks/mock-analisis.data';
export { MOCK_UIFA, MOCK_MEDICO, MOCK_INVESTIGADOR, MOCK_TECNICO } from './mocks/mock-proveedores.data';
export { MOCK_ORDENES_PAGO, MOCK_OBJECIONES, MOCK_DECISIONES } from './mocks/mock-pagos.data';
