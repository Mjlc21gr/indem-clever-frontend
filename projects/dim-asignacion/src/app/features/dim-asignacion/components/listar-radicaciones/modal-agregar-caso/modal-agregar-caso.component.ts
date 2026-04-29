import { Component, input, output, signal, ChangeDetectionStrategy } from '@angular/core';
import { Dialog } from 'primeng/dialog';
import { TabPanel, Tabs, TabList, Tab, TabPanels } from 'primeng/tabs';
import { Button } from 'primeng/button';
import { Divider } from 'primeng/divider';
import { VentanaDatosGeneralesComponent } from './ventana-datos-generales/ventana-datos-generales.component';
import { VentanaDataOperativaComponent } from './ventana-data-operativa/ventana-data-operativa.component';
import { SeccionDerivacionComponent } from './ventana-datos-generales/secciones/seccion-derivacion/seccion-derivacion.component';

/** Modal: Agregar Caso / Radicaciones. */
@Component({
  selector: 'app-modal-agregar-caso',
  imports: [
    Dialog,
    Tabs, TabList, Tab, TabPanels, TabPanel,
    Button, Divider,
    VentanaDatosGeneralesComponent,
    VentanaDataOperativaComponent,
    SeccionDerivacionComponent,
  ],
  templateUrl: './modal-agregar-caso.component.html',
  styleUrl: './modal-agregar-caso.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalAgregarCasoComponent {
  /** Controls the visibility of the dialog. */
  visible = input(false);

  /** Emits when the dialog is closed. */
  readonly onClose = output<void>();

  /** Active tab index. */
  activeTab = signal('0');

  /* ── Datos Generales ── */
  tipoDocumentoAsegurado = signal('');
  numeroDocumentoAsegurado = signal('');
  nombreAsegurado = signal('');
  apellidos = signal('');
  edadAsegurado = signal('');
  correoAsegurado = signal('');
  telefonoContacto = signal('');

  numeroPoliza = signal('');
  codigoProducto = signal('');
  portafolioCodigoProducto = signal('');
  portafolioNombreProducto = signal('');
  numeroDeRiesgo = signal('');
  riesgoCliente = signal('');
  cobertura = signal('');
  codCobertura = signal('');
  fechaAviso = signal('');
  valorAsegurado = signal('');
  valorAseguradoVida = signal('');
  valorAseguradoItp = signal('');
  scoreCliente = signal('');
  superoPeso = signal('');
  masDeUnIngreso = signal('');
  aprobacionTerminos = signal('');
  nitEmpresa = signal('');
  nombreEmpresa = signal('');

  cucConceptoGeneral = signal('');
  coberturaPrincipal = signal('');
  fechaSiniestro = signal('');
  ciudadOcurrencia = signal('');
  causaCodificada = signal('');
  intencion = signal('');
  accionData = signal('');
  casoPadre = signal('');
  causa = signal('');
  consecuencia = signal('');
  observacion = signal('');

  numeroCuentaBancaria = signal('');
  entidadBancaria = signal('');
  codBanco = signal('');
  tipoCuentaBancaria = signal('');
  aprobacionCuenta = signal('');

  numeroSiniestroRadi = signal('');
  superoPesoRadicacion = signal('');
  observacionRadicado = signal('');

  /* ── Data Operativa ── */
  consultaTipoDoc = signal('');
  consultaNumDoc = signal('');
  nombreCliente = signal('');
  tipoDocumentoClever = signal('');
  numeroDocumentoClever = signal('');
  tipoPersona = signal('');
  nombreEmpresaData = signal('');
  estadoCliente = signal('');
  demSexo = signal('');
  demFechaNacimiento = signal('');
  demEdad = signal('');
  demDireccion = signal('');
  demMunicipio = signal('');

  /* ── Derivación ── */
  enviarProveedores = signal('no');
  enviarLineaNegocio = signal(false);
  proveedorInvestigador = signal(false);
  proveedorUIFA = signal(false);
  proveedorTecnico = signal(false);
  agentesInvestigador = signal<{ label: string; value: string }[]>([]);
  agentesTecnico = signal<{ label: string; value: string }[]>([]);
  agenteInvestigadorRadi = signal('');
  motivoMovilizacionInvestigador = signal('');
  motivoMovilizacionUIFA = signal('');
  agenteTecnicoRadi = signal('');
  motivoMovilizacionTecnico = signal('');

  /** Closes the dialog. */
  close(): void {
    this.onClose.emit();
  }

  /** Handles PrimeNG visibleChange when X button or escape is pressed. */
  onVisibleChange(value: boolean): void {
    if (!value) {
      this.onClose.emit();
    }
  }
  onFileUpload(event: { files: File[] }): void {
    // TODO: process uploaded files
  }

  /** Saves the radicado. */
  guardarRadicado(): void {
    // TODO: call service
  }

  /** Annuls the case. */
  anularCaso(): void {
    // TODO: call service
  }
}
