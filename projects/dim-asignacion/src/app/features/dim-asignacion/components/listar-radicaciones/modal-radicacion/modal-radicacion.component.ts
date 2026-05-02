import { Component, input, output, signal, ChangeDetectionStrategy } from '@angular/core';
import { Dialog } from 'primeng/dialog';
import { TabPanel, Tabs, TabList, Tab, TabPanels } from 'primeng/tabs';
import { Divider } from 'primeng/divider';
import { VentanaDatosGeneralesComponent } from '../modal-agregar-caso/ventana-datos-generales/ventana-datos-generales.component';
import { VentanaDataOperativaComponent } from '../modal-agregar-caso/ventana-data-operativa/ventana-data-operativa.component';
import { SeccionDerivacionComponent, BotonAccionComponent } from '@shared';

@Component({
  selector: 'app-modal-radicacion',
  imports: [
    Dialog, Tabs, TabList, Tab, TabPanels, TabPanel, Divider,
    VentanaDatosGeneralesComponent, VentanaDataOperativaComponent,
    SeccionDerivacionComponent, BotonAccionComponent,
  ],
  templateUrl: './modal-radicacion.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalRadicacionComponent {
  visible = input(false);
  readonly onClose = output<void>();
  activeTab = signal('0');
  observacionRadicado = signal('');
  consultaTipoDoc = signal('');
  consultaNumDoc = signal('');

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

  /** Cierra el modal. */
  close(): void { this.onClose.emit(); }

  /** Maneja cambio de visibilidad del diálogo. */
  onVisibleChange(v: boolean): void { if (!v) { this.onClose.emit(); } }

  /** TODO: Conectar al backend — subir archivos adjuntos al caso. */
  onFileUpload(_e: { files: File[] }): void { /* TODO: implementar */ }

  /** TODO: Conectar al backend — guardar radicado con datos del formulario. */
  guardarRadicado(): void { /* TODO: implementar */ }

  /** TODO: Conectar al backend — anular caso con confirmación. */
  anularCaso(): void { /* TODO: implementar */ }
}
