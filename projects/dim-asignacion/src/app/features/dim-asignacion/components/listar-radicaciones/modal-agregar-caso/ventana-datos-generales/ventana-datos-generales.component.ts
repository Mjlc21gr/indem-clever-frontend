import { Component, model, output, ChangeDetectionStrategy } from '@angular/core';
import { Divider } from 'primeng/divider';
import { SeccionAseguradoComponent } from './secciones/seccion-asegurado/seccion-asegurado.component';
import { SeccionRadicadoComponent } from './secciones/seccion-radicado/seccion-radicado.component';
import { SeccionSiniestroComponent } from './secciones/seccion-siniestro/seccion-siniestro.component';
import { SeccionBancariaComponent } from './secciones/seccion-bancaria/seccion-bancaria.component';
import { SeccionNumeroSiniestroComponent } from './secciones/seccion-numero-siniestro/seccion-numero-siniestro.component';
import { SeccionArchivosComponent } from './secciones/seccion-archivos/seccion-archivos.component';
import { SeccionHistorialComponent } from './secciones/seccion-historial/seccion-historial.component';
import { SeccionObservacionesComponent } from './secciones/seccion-observaciones/seccion-observaciones.component';

/** Ventana: Datos Generales (Tab 0 del modal Agregar Caso). */
@Component({
  selector: 'app-ventana-datos-generales',
  imports: [
    Divider,
    SeccionAseguradoComponent,
    SeccionRadicadoComponent,
    SeccionSiniestroComponent,
    SeccionBancariaComponent,
    SeccionNumeroSiniestroComponent,
    SeccionArchivosComponent,
    SeccionHistorialComponent,
    SeccionObservacionesComponent,
  ],
  templateUrl: './ventana-datos-generales.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VentanaDatosGeneralesComponent {
  /* Asegurado */
  tipoDocumentoAsegurado = model('');
  numeroDocumentoAsegurado = model('');
  nombreAsegurado = model('');
  apellidos = model('');
  edadAsegurado = model('');
  correoAsegurado = model('');
  telefonoContacto = model('');

  /* Radicado */
  numeroPoliza = model('');
  codigoProducto = model('');
  portafolioCodigoProducto = model('');
  portafolioNombreProducto = model('');
  numeroDeRiesgo = model('');
  riesgoCliente = model('');
  cobertura = model('');
  codCobertura = model('');
  fechaAviso = model('');
  valorAsegurado = model('');
  valorAseguradoVida = model('');
  valorAseguradoItp = model('');
  scoreCliente = model('');
  superoPeso = model('');
  masDeUnIngreso = model('');
  aprobacionTerminos = model('');
  nitEmpresa = model('');
  nombreEmpresa = model('');

  /* Siniestro */
  cucConceptoGeneral = model('');
  coberturaPrincipal = model('');
  fechaSiniestro = model('');
  ciudadOcurrencia = model('');
  causaCodificada = model('');
  intencion = model('');
  accionData = model('');
  casoPadre = model('');
  causa = model('');
  consecuencia = model('');
  observacion = model('');

  /* Bancaria */
  numeroCuentaBancaria = model('');
  entidadBancaria = model('');
  codBanco = model('');
  tipoCuentaBancaria = model('');
  aprobacionCuenta = model('');

  /* Número Siniestro */
  numeroSiniestroRadi = model('');
  superoPesoRadicacion = model('');

  /* Observaciones */
  observacionRadicado = model('');

  /** Emits when files are selected. */
  readonly filesSelected = output<{ files: File[] }>();

  /** Handles file selection from seccion-archivos. */
  onFilesSelected(event: { files: File[] }): void {
    this.filesSelected.emit(event);
  }
}
