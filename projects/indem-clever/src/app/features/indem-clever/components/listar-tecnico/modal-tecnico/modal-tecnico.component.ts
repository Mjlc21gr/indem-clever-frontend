import { Component, input, output, signal, ChangeDetectionStrategy } from '@angular/core';
import { SeccionFormularioDinamicoComponent, type CampoFormulario, SeccionPanelGenericoComponent, SeccionArchivosComponent, SeccionObservacionesGenericaComponent, BotonAccionComponent } from '@shared';
@Component({
  selector: 'app-modal-tecnico',
  imports: [SeccionFormularioDinamicoComponent, SeccionPanelGenericoComponent, SeccionArchivosComponent, SeccionObservacionesGenericaComponent, BotonAccionComponent],
  templateUrl: './modal-tecnico.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalTecnicoComponent {
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
  readonly camposTecnico: CampoFormulario[] = [
    { key: 'motivoMovilizacion', label: 'Motivo Movilización', fullWidth: true },
    { key: 'notasTecnico', label: 'Notas del Técnico', type: 'textarea', rows: 3, fullWidth: true },
  ];
  valoresAsegurado = signal<Record<string, string>>({});
  valoresRadicado = signal<Record<string, string>>({});
  valoresSiniestro = signal<Record<string, string>>({});
  valoresTecnico = signal<Record<string, string>>({});
  observacionProveedor = signal('');
  maximized = false;

  /** Cierra el modal. */
  close(): void { this.maximized = false; this.onClose.emit(); }

  /** Alterna entre maximizado y normal. */
  toggleMaximize(): void { this.maximized = !this.maximized; }

  /** TODO: Conectar al backend — completar movilización técnico. */
  completar(): void { /* TODO: implementar */ }
}
