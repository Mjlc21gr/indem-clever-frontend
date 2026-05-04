import { Component, input, output, signal, ChangeDetectionStrategy } from '@angular/core';
import { SeccionFormularioDinamicoComponent, type CampoFormulario, SeccionPanelGenericoComponent, SeccionArchivosComponent, SeccionObservacionesGenericaComponent, BotonAccionComponent } from '@shared';
@Component({
  selector: 'app-modal-medico',
  imports: [SeccionFormularioDinamicoComponent, SeccionPanelGenericoComponent, SeccionArchivosComponent, SeccionObservacionesGenericaComponent, BotonAccionComponent],
  templateUrl: './modal-medico.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalMedicoComponent {
  visible = input(false);
  readonly onClose = output<void>();
  readonly camposAsegurado: CampoFormulario[] = [
    { key: 'tipoDocumento', label: 'Tipo Documento' },
    { key: 'numeroDocumento', label: 'Número Documento' },
    { key: 'nombre', label: 'Nombre Asegurado' },
    { key: 'correo', label: 'Correo Electrónico', type: 'email' },
    { key: 'telefono', label: 'Teléfono de Contacto', type: 'tel' },
  ];
  readonly camposRadicado: CampoFormulario[] = [
    { key: 'idRadicado', label: 'ID Radicado' },
    { key: 'numeroPoliza', label: 'Número Póliza' },
    { key: 'codigoProducto', label: 'Código Producto' },
    { key: 'numeroDeRiesgo', label: 'Número de Riesgo' },
    { key: 'fechaAviso', label: 'Fecha Aviso' },
    { key: 'cobertura', label: 'Cobertura' },
  ];
  readonly camposSiniestro: CampoFormulario[] = [
    { key: 'fechaSiniestro', label: 'Fecha Siniestro' },
    { key: 'ciudadOcurrencia', label: 'Ciudad Ocurrencia' },
    { key: 'causa', label: 'Versión del Siniestro' },
    { key: 'consecuencia', label: 'Consecuencia' },
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
  maximized = false;

  /** Cierra el modal. */
  close(): void { this.maximized = false; this.onClose.emit(); }

  /** Alterna entre maximizado y normal. */
  toggleMaximize(): void { this.maximized = !this.maximized; }

  /** TODO: Conectar al backend — completar movilización médico. */
  completar(): void { /* TODO: implementar */ }
}
