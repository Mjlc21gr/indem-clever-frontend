import { Component, input, output, signal, ChangeDetectionStrategy } from '@angular/core';
import { Dialog } from 'primeng/dialog';
import { SeccionFormularioDinamicoComponent } from '@shared/components/secciones/seccion-formulario-dinamico/seccion-formulario-dinamico.component';
import type { CampoFormulario } from '@shared/components/secciones/seccion-formulario-dinamico/seccion-formulario-dinamico.component';
import { SeccionPanelGenericoComponent } from '@shared/components/secciones/seccion-panel-generico/seccion-panel-generico.component';
import { SeccionArchivosComponent } from '@shared/components/secciones/seccion-archivos/seccion-archivos.component';
import { SeccionObservacionesGenericaComponent } from '@shared/components/secciones/seccion-observaciones-generica/seccion-observaciones-generica.component';
import { BotonAccionComponent } from '@shared/components/boton-accion/boton-accion.component';
@Component({
  selector: 'app-modal-tecnico',
  imports: [Dialog, SeccionFormularioDinamicoComponent, SeccionPanelGenericoComponent, SeccionArchivosComponent, SeccionObservacionesGenericaComponent, BotonAccionComponent],
  templateUrl: './modal-tecnico.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalTecnicoComponent {
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
  readonly camposTecnico: CampoFormulario[] = [
    { key: 'motivoMovilizacion', label: 'Motivo Movilización', readonly: true, fullWidth: true },
    { key: 'notasTecnico', label: 'Notas del Técnico', type: 'textarea', rows: 3, fullWidth: true },
  ];
  valoresAsegurado = signal<Record<string, string>>({});
  valoresRadicado = signal<Record<string, string>>({});
  valoresSiniestro = signal<Record<string, string>>({});
  valoresTecnico = signal<Record<string, string>>({});
  observacionProveedor = signal('');
  close(): void { this.onClose.emit(); }
  onVisibleChange(v: boolean): void { if (!v) { this.onClose.emit(); } }
  completar(): void {}
}
