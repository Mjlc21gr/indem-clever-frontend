import { Component, input, output, signal, ChangeDetectionStrategy } from '@angular/core';
import { SeccionFormularioDinamicoComponent, type CampoFormulario, SeccionAnalisisIaComponent, SeccionPanelGenericoComponent, BotonAccionComponent } from '@shared';

@Component({
  selector: 'app-modal-pago',
  imports: [SeccionFormularioDinamicoComponent, SeccionAnalisisIaComponent, SeccionPanelGenericoComponent, BotonAccionComponent],
  templateUrl: './modal-pago.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalPagoComponent {
  visible = input(false);
  readonly onClose = output<void>();

  readonly camposAsegurado: CampoFormulario[] = [
    { key: 'tipoDocumento', label: 'Tipo Documento' },
    { key: 'numeroDocumento', label: 'Número Documento' },
    { key: 'nombre', label: 'Nombre Asegurado' },
    { key: 'edad', label: 'Edad Asegurado' },
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
    { key: 'codCobertura', label: 'Cod. Cobertura' },
    { key: 'portafolioCodigo', label: 'Portafolio Cod.' },
    { key: 'portafolioNombre', label: 'Portafolio Nombre' },
    { key: 'valorAsegurado', label: 'Valor Asegurado' },
    { key: 'valorAseguradoVida', label: 'Val. Aseg. Vida' },
    { key: 'valorAseguradoItp', label: 'Val. Aseg. ITP' },
    { key: 'scoreCliente', label: 'Score Cliente' },
    { key: 'aprobacionTerminos', label: 'Aprobación Términos' },
    { key: 'nitEmpresa', label: 'NIT Empresa' },
    { key: 'nombreEmpresa', label: 'Nombre Empresa' },
  ];
  readonly camposSiniestro: CampoFormulario[] = [
    { key: 'numeroSiniestro', label: 'Número Siniestro' },
    { key: 'fechaSiniestro', label: 'Fecha Siniestro' },
    { key: 'ciudadOcurrencia', label: 'Ciudad Ocurrencia' },
    { key: 'causa', label: 'Versión Siniestro', type: 'textarea', rows: 2, fullWidth: true },
    { key: 'cucConcepto', label: 'CUC. Concepto', type: 'textarea', rows: 1, fullWidth: true },
    { key: 'coberturaPrincipal', label: 'Cobertura Principal', type: 'textarea', rows: 1, fullWidth: true },
    { key: 'consecuencia', label: 'Consecuencia' },
    { key: 'causaCodificada', label: 'Causa' },
    { key: 'intencion', label: 'Intención' },
    { key: 'accion', label: 'Acción' },
    { key: 'casoPadre', label: 'Caso Padre' },
    { key: 'observacion', label: 'Observación / Respuesta', type: 'textarea', rows: 2, fullWidth: true },
  ];
  readonly camposBancaria: CampoFormulario[] = [
    { key: 'numeroCuenta', label: 'Número de Cuenta' },
    { key: 'entidadBancaria', label: 'Entidad Bancaria' },
    { key: 'codBanco', label: 'Cod. Banco' },
    { key: 'tipoCuenta', label: 'Tipo de Cuenta' },
    { key: 'aprobacionCuenta', label: 'Aprobación Cta' },
  ];
  readonly camposOpenL: CampoFormulario[] = [
    { key: 'openlDecision', label: 'Sugerencia Final (OpenL)', type: 'textarea', rows: 2, fullWidth: true },
    { key: 'masDeUnIngreso', label: 'Más de un ingreso' },
    { key: 'decisionIA', label: 'Decisión IA' },
    { key: 'openlCause', label: 'OpenL Cause' },
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
