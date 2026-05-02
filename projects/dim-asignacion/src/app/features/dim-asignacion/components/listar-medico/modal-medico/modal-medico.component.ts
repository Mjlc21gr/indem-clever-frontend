import { Component, input, output, signal, ChangeDetectionStrategy } from '@angular/core';
import { Dialog } from 'primeng/dialog';
import { SeccionFormularioDinamicoComponent, type CampoFormulario, SeccionPanelGenericoComponent, SeccionArchivosComponent, SeccionObservacionesGenericaComponent, BotonAccionComponent } from '@shared';
@Component({
  selector: 'app-modal-medico',
  imports: [Dialog, SeccionFormularioDinamicoComponent, SeccionPanelGenericoComponent, SeccionArchivosComponent, SeccionObservacionesGenericaComponent, BotonAccionComponent],
  templateUrl: './modal-medico.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalMedicoComponent {
  visible = input(false);
  readonly onClose = output<void>();
  readonly camposAsegurado: CampoFormulario[] = [
    { key: 'tipoDocumento', label: 'Tipo Documento', readonly: true },
    { key: 'numeroDocumento', label: 'Número Documento', readonly: true },
    { key: 'nombre', label: 'Nombre Asegurado', readonly: true },
    { key: 'correo', label: 'Correo Electrónico', type: 'email', readonly: true },
    { key: 'telefono', label: 'Teléfono de Contacto', type: 'tel', readonly: true },
  ];
  readonly camposRadicado: CampoFormulario[] = [
    { key: 'idRadicado', label: 'ID Radicado', readonly: true },
    { key: 'numeroPoliza', label: 'Número Póliza', readonly: true },
    { key: 'codigoProducto', label: 'Código Producto', readonly: true },
    { key: 'numeroDeRiesgo', label: 'Número de Riesgo', readonly: true },
    { key: 'fechaAviso', label: 'Fecha Aviso', readonly: true },
    { key: 'cobertura', label: 'Cobertura', readonly: true },
  ];
  readonly camposSiniestro: CampoFormulario[] = [
    { key: 'fechaSiniestro', label: 'Fecha Siniestro', readonly: true },
    { key: 'ciudadOcurrencia', label: 'Ciudad Ocurrencia', readonly: true },
    { key: 'causa', label: 'Versión del Siniestro', readonly: true },
    { key: 'consecuencia', label: 'Consecuencia', readonly: true },
  ];
  readonly camposMedico: CampoFormulario[] = [
    { key: 'accionMedico', label: 'Acción' },
    { key: 'notasMedico', label: 'Notas Médico', type: 'textarea', rows: 4 },
  ];
  valoresAsegurado = signal<Record<string, string>>({});
  valoresRadicado = signal<Record<string, string>>({});
  valoresSiniestro = signal<Record<string, string>>({});
  valoresMedico = signal<Record<string, string>>({});
  observacionProveedor = signal('');
  /** Cierra el modal. */
  close(): void { this.onClose.emit(); }

  /** Maneja cambio de visibilidad del diálogo. */
  onVisibleChange(v: boolean): void { if (!v) { this.onClose.emit(); } }

  /** TODO: Conectar al backend — completar movilización médico. */
  completar(): void { /* TODO: implementar */ }
}
