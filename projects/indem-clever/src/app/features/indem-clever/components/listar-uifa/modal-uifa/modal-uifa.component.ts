import { Component, input, output, signal, ChangeDetectionStrategy } from '@angular/core';
import { SeccionFormularioDinamicoComponent, type CampoFormulario, SeccionPanelGenericoComponent, SeccionArchivosComponent, SeccionObservacionesGenericaComponent, BotonAccionComponent } from '@shared';
@Component({
  selector: 'app-modal-uifa',
  imports: [SeccionFormularioDinamicoComponent, SeccionPanelGenericoComponent, SeccionArchivosComponent, SeccionObservacionesGenericaComponent, BotonAccionComponent],
  templateUrl: './modal-uifa.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalUifaComponent {
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
    { key: 'riesgoCliente', label: 'Riesgo Cliente', readonly: true },
    { key: 'fechaAviso', label: 'Fecha Aviso', readonly: true },
    { key: 'cobertura', label: 'Cobertura', readonly: true },
  ];
  readonly camposSiniestro: CampoFormulario[] = [
    { key: 'fechaSiniestro', label: 'Fecha Siniestro', readonly: true },
    { key: 'ciudadOcurrencia', label: 'Ciudad Ocurrencia', readonly: true },
    { key: 'causa', label: 'Versión del Siniestro', readonly: true },
    { key: 'consecuencia', label: 'Consecuencia', readonly: true },
  ];
  readonly camposUifa: CampoFormulario[] = [
    { key: 'motivoMovilizacion', label: 'Motivo Movilización', readonly: true, fullWidth: true },
    { key: 'impactoRiesgo', label: 'Impacto de Riesgo' },
    { key: 'estado', label: 'Estado' },
  ];
  valoresAsegurado = signal<Record<string, string>>({});
  valoresRadicado = signal<Record<string, string>>({});
  valoresSiniestro = signal<Record<string, string>>({});
  valoresUifa = signal<Record<string, string>>({});
  observacionProveedor = signal('');
  maximized = false;

  /** Cierra el modal. */
  close(): void { this.maximized = false; this.onClose.emit(); }

  /** Alterna entre maximizado y normal. */
  toggleMaximize(): void { this.maximized = !this.maximized; }

  /** TODO: Conectar al backend — completar movilización UIFA. */
  completar(): void { /* TODO: implementar */ }
}
