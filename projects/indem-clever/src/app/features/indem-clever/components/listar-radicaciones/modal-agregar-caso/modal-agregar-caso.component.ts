import { Component, input, output, signal, ChangeDetectionStrategy } from '@angular/core';
import { VentanaDatosGeneralesComponent } from './ventana-datos-generales/ventana-datos-generales.component';
import { VentanaDataOperativaComponent } from './ventana-data-operativa/ventana-data-operativa.component';
import { SeccionDerivacionComponent, BotonAccionComponent } from '@shared';

@Component({
  selector: 'app-modal-agregar-caso',
  imports: [
    VentanaDatosGeneralesComponent, VentanaDataOperativaComponent,
    SeccionDerivacionComponent, BotonAccionComponent,
  ],
  templateUrl: './modal-agregar-caso.component.html',
  styleUrl: './modal-agregar-caso.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalAgregarCasoComponent {
  visible = input(false);
  readonly onClose = output<void>();
  activeTab = signal('0');
  observacionRadicado = signal('');
  consultaTipoDoc = signal('');
  consultaNumDoc = signal('');

  /* Derivación */
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

  maximized = false;

  /** Cierra el modal. */
  close(): void { this.maximized = false; this.onClose.emit(); }

  /** Alterna entre maximizado y normal. */
  toggleMaximize(): void { this.maximized = !this.maximized; }

  /** TODO: Conectar al backend — subir archivos adjuntos al caso. */
  onFileUpload(_e: { files: File[] }): void { /* TODO: implementar */ }

  /** TODO: Conectar al backend — guardar radicado con datos del formulario. */
  guardarRadicado(): void { /* TODO: implementar */ }

  /** TODO: Conectar al backend — anular caso con confirmación. */
  anularCaso(): void { /* TODO: implementar */ }
}
