import { Component, model, output, signal, ChangeDetectionStrategy } from '@angular/core';
import { Divider } from 'primeng/divider';
import { SeccionFormularioDinamicoComponent } from '@shared/components/secciones/seccion-formulario-dinamico/seccion-formulario-dinamico.component';
import { SeccionArchivosComponent } from '@shared/components/secciones/seccion-archivos/seccion-archivos.component';
import { SeccionPanelGenericoComponent } from '@shared/components/secciones/seccion-panel-generico/seccion-panel-generico.component';
import { SeccionObservacionesGenericaComponent } from '@shared/components/secciones/seccion-observaciones-generica/seccion-observaciones-generica.component';
import type { CampoFormulario } from '@shared/components/secciones/seccion-formulario-dinamico/seccion-formulario-dinamico.component';

@Component({
  selector: 'app-ventana-datos-generales',
  imports: [
    Divider,
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
    { key: 'tipoDocumento', label: 'Tipo Documento', readonly: true },
    { key: 'numeroDocumento', label: 'Número Documento', readonly: true },
    { key: 'nombre', label: 'Nombre Asegurado', readonly: true },
    { key: 'apellidos', label: 'Apellidos', readonly: true },
    { key: 'edad', label: 'Edad Asegurado', readonly: true },
    { key: 'correo', label: 'Correo Electrónico', type: 'email', readonly: true },
    { key: 'telefono', label: 'Teléfono de Contacto', type: 'tel', readonly: true },
  ];
  readonly camposRadicado: CampoFormulario[] = [
    { key: 'numeroPoliza', label: 'Número Póliza', readonly: true },
    { key: 'codigoProducto', label: 'Código Producto', readonly: true },
    { key: 'portafolioCodigo', label: 'Portafolio Cod.', readonly: true },
    { key: 'portafolioNombre', label: 'Portafolio Nombre', readonly: true },
    { key: 'numeroDeRiesgo', label: 'Número de Riesgo', readonly: true },
    { key: 'riesgoCliente', label: 'Riesgo Cliente', readonly: true },
    { key: 'cobertura', label: 'Cobertura', readonly: true },
    { key: 'codCobertura', label: 'Cod. Cobertura', readonly: true },
    { key: 'fechaAviso', label: 'Fecha Aviso', readonly: true },
    { key: 'valorAsegurado', label: 'Valor Asegurado', readonly: true },
    { key: 'valorAseguradoVida', label: 'Val. Aseg. Vida', readonly: true },
    { key: 'valorAseguradoItp', label: 'Val. Aseg. ITP', readonly: true },
    { key: 'scoreCliente', label: 'Score Cliente', readonly: true },
    { key: 'superoPeso', label: 'Superó Peso', readonly: true },
    { key: 'masDeUnIngreso', label: 'Más de un Ingreso', readonly: true },
    { key: 'aprobacionTerminos', label: 'Aprobación Términos', readonly: true },
    { key: 'nitEmpresa', label: 'NIT Empresa', readonly: true },
    { key: 'nombreEmpresa', label: 'Nombre Empresa', readonly: true },
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
    { key: 'superoPesoDocumentos', label: 'Superó Peso Documentos', readonly: true },
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
