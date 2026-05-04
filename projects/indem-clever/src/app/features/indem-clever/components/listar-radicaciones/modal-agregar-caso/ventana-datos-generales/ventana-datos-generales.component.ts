import { Component, model, output, signal, ChangeDetectionStrategy } from '@angular/core';
import { SeccionFormularioDinamicoComponent, type CampoFormulario, SeccionArchivosComponent, SeccionPanelGenericoComponent, SeccionObservacionesGenericaComponent } from '@shared';

@Component({
  selector: 'app-ventana-datos-generales',
  imports: [
    SeccionFormularioDinamicoComponent,
    SeccionArchivosComponent,
    SeccionPanelGenericoComponent,
    SeccionObservacionesGenericaComponent,
  ],
  templateUrl: './ventana-datos-generales.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VentanaDatosGeneralesComponent {
  readonly camposAsegurado: CampoFormulario[] = [
    { key: 'tipoDocumento', label: 'Tipo Documento' },
    { key: 'numeroDocumento', label: 'Número Documento' },
    { key: 'nombre', label: 'Nombre Asegurado' },
    { key: 'apellidos', label: 'Apellidos' },
    { key: 'edad', label: 'Edad Asegurado' },
    { key: 'correo', label: 'Correo Electrónico', type: 'email' },
    { key: 'telefono', label: 'Teléfono de Contacto', type: 'tel' },
  ];
  readonly camposRadicado: CampoFormulario[] = [
    { key: 'numeroPoliza', label: 'Número Póliza' },
    { key: 'codigoProducto', label: 'Código Producto' },
    { key: 'portafolioCodigo', label: 'Portafolio Cod.' },
    { key: 'portafolioNombre', label: 'Portafolio Nombre' },
    { key: 'numeroDeRiesgo', label: 'Número de Riesgo' },
    { key: 'riesgoCliente', label: 'Riesgo Cliente' },
    { key: 'cobertura', label: 'Cobertura' },
    { key: 'codCobertura', label: 'Cod. Cobertura' },
    { key: 'fechaAviso', label: 'Fecha Aviso' },
    { key: 'valorAsegurado', label: 'Valor Asegurado' },
    { key: 'valorAseguradoVida', label: 'Val. Aseg. Vida' },
    { key: 'valorAseguradoItp', label: 'Val. Aseg. ITP' },
    { key: 'scoreCliente', label: 'Score Cliente' },
    { key: 'superoPeso', label: 'Superó Peso' },
    { key: 'masDeUnIngreso', label: 'Más de un Ingreso' },
    { key: 'aprobacionTerminos', label: 'Aprobación Términos' },
    { key: 'nitEmpresa', label: 'NIT Empresa' },
    { key: 'nombreEmpresa', label: 'Nombre Empresa' },
  ];
  readonly camposSiniestro: CampoFormulario[] = [
    { key: 'cucConceptoGeneral', label: 'CUC. Concepto', type: 'textarea', rows: 1, fullWidth: true },
    { key: 'coberturaPrincipal', label: 'Cobertura Principal', type: 'textarea', rows: 1, fullWidth: true },
    { key: 'fechaSiniestro', label: 'Fecha Siniestro' },
    { key: 'ciudadOcurrencia', label: 'Ciudad Ocurrencia' },
    { key: 'causaCodificada', label: 'Causa (Cod)' },
    { key: 'intencion', label: 'Intención' },
    { key: 'accionData', label: 'Acción' },
    { key: 'casoPadre', label: 'Caso Padre' },
    { key: 'causa', label: 'Versión del Siniestro', type: 'textarea', rows: 2, fullWidth: true },
    { key: 'consecuencia', label: 'Consecuencia', type: 'textarea', rows: 1, fullWidth: true },
    { key: 'observacion', label: 'Observación', type: 'textarea', rows: 1, fullWidth: true },
  ];
  readonly camposBancaria: CampoFormulario[] = [
    { key: 'numeroCuenta', label: 'Número de Cuenta' },
    { key: 'entidadBancaria', label: 'Entidad Bancaria' },
    { key: 'codBanco', label: 'Cod. Banco' },
    { key: 'tipoCuenta', label: 'Tipo de Cuenta' },
    { key: 'aprobacionCuenta', label: 'Aprobación Cta' },
  ];
  readonly camposNumeroSiniestro: CampoFormulario[] = [
    { key: 'numeroSiniestro', label: 'Número Siniestro' },
    { key: 'superoPesoDocumentos', label: 'Superó Peso Documentos' },
  ];

  valoresAsegurado = signal<Record<string, string>>({});
  valoresRadicado = signal<Record<string, string>>({});
  valoresSiniestro = signal<Record<string, string>>({});
  valoresBancaria = signal<Record<string, string>>({});
  valoresNumeroSiniestro = signal<Record<string, string>>({});
  observacionRadicado = model('');

  readonly filesSelected = output<{ files: File[] }>();
  onFilesSelected(event: { files: File[] }): void {
    this.filesSelected.emit(event);
  }
}
