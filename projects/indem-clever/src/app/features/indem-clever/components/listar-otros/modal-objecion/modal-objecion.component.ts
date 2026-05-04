import { Component, input, output, signal, ChangeDetectionStrategy } from '@angular/core';
import { SeccionFormularioDinamicoComponent, type CampoFormulario, SeccionAnalisisIaComponent, SeccionPanelGenericoComponent, BotonAccionComponent } from '@shared';

@Component({
  selector: 'app-modal-objecion',
  imports: [SeccionFormularioDinamicoComponent, SeccionAnalisisIaComponent, SeccionPanelGenericoComponent, BotonAccionComponent],
  templateUrl: './modal-objecion.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalObjecionComponent {
  visible = input(false);
  readonly onClose = output<void>();
  readonly camposAsegurado: CampoFormulario[] = [
    { key: 'tipoDocumento', label: 'Tipo Documento', readonly: true },
    { key: 'numeroDocumento', label: 'Número Documento', readonly: true },
    { key: 'nombre', label: 'Nombre Asegurado', readonly: true },
    { key: 'edad', label: 'Edad Asegurado', readonly: true },
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
    { key: 'codCobertura', label: 'Cod. Cobertura', readonly: true },
    { key: 'portafolioCodigo', label: 'Portafolio Cod.', readonly: true },
    { key: 'portafolioNombre', label: 'Portafolio Nombre', readonly: true },
    { key: 'valorAsegurado', label: 'Valor Asegurado', readonly: true },
    { key: 'valorAseguradoVida', label: 'Val. Aseg. Vida', readonly: true },
    { key: 'valorAseguradoItp', label: 'Val. Aseg. ITP', readonly: true },
    { key: 'scoreCliente', label: 'Score Cliente', readonly: true },
    { key: 'aprobacionTerminos', label: 'Aprobación Términos', readonly: true },
    { key: 'nitEmpresa', label: 'NIT Empresa', readonly: true },
    { key: 'nombreEmpresa', label: 'Nombre Empresa', readonly: true },
  ];
  readonly camposSiniestro: CampoFormulario[] = [
    { key: 'numeroSiniestro', label: 'Número Siniestro', readonly: true },
    { key: 'fechaSiniestro', label: 'Fecha Siniestro', readonly: true },
    { key: 'ciudadOcurrencia', label: 'Ciudad Ocurrencia', readonly: true },
    { key: 'causa', label: 'Versión Siniestro', type: 'textarea', rows: 2, fullWidth: true, readonly: true },
    { key: 'cucConcepto', label: 'CUC. Concepto', type: 'textarea', rows: 1, fullWidth: true, readonly: true },
    { key: 'coberturaPrincipal', label: 'Cobertura Principal', type: 'textarea', rows: 1, fullWidth: true, readonly: true },
    { key: 'consecuencia', label: 'Consecuencia', readonly: true },
    { key: 'causaCodificada', label: 'Causa', readonly: true },
    { key: 'intencion', label: 'Intención', readonly: true },
    { key: 'accion', label: 'Acción', readonly: true },
    { key: 'casoPadre', label: 'Caso Padre', readonly: true },
    { key: 'observacion', label: 'Observación / Respuesta', type: 'textarea', rows: 2, fullWidth: true, readonly: true },
  ];
  readonly camposBancaria: CampoFormulario[] = [
    { key: 'numeroCuenta', label: 'Número de Cuenta', readonly: true },
    { key: 'entidadBancaria', label: 'Entidad Bancaria', readonly: true },
    { key: 'codBanco', label: 'Cod. Banco', readonly: true },
    { key: 'tipoCuenta', label: 'Tipo de Cuenta', readonly: true },
    { key: 'aprobacionCuenta', label: 'Aprobación Cta', readonly: true },
  ];
  readonly camposOpenL: CampoFormulario[] = [
    { key: 'openlDecision', label: 'Sugerencia Final (OpenL)', type: 'textarea', rows: 2, fullWidth: true, readonly: true },
    { key: 'masDeUnIngreso', label: 'Más de un ingreso', readonly: true },
    { key: 'decisionIA', label: 'Decisión IA', readonly: true },
    { key: 'openlCause', label: 'OpenL Cause', readonly: true },
  ];
  valoresAsegurado = signal<Record<string, string>>({});
  valoresRadicado = signal<Record<string, string>>({});
  valoresSiniestro = signal<Record<string, string>>({});
  valoresBancaria = signal<Record<string, string>>({});
  valoresOpenL = signal<Record<string, string>>({});
  maximized = false;

  /** Cierra el modal. */
  close(): void { this.maximized = false; this.onClose.emit(); }

  /** Alterna entre maximizado y normal. */
  toggleMaximize(): void { this.maximized = !this.maximized; }
}
