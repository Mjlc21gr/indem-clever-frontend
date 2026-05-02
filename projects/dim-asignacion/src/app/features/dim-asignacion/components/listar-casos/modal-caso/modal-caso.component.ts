import { Component, input, output, signal, ChangeDetectionStrategy } from '@angular/core';
import { Dialog } from 'primeng/dialog';
import { Fieldset } from 'primeng/fieldset';
import { TableModule } from 'primeng/table';
import { SeccionFormularioDinamicoComponent } from '@shared/components/secciones/seccion-formulario-dinamico/seccion-formulario-dinamico.component';
import type { CampoFormulario } from '@shared/components/secciones/seccion-formulario-dinamico/seccion-formulario-dinamico.component';
import { SeccionLineaTiempoComponent } from '@shared/components/secciones/seccion-linea-tiempo/seccion-linea-tiempo.component';
import type { EtapaLineaTiempo } from '@shared/components/secciones/seccion-linea-tiempo/seccion-linea-tiempo.component';
import { SeccionPanelGenericoComponent } from '@shared/components/secciones/seccion-panel-generico/seccion-panel-generico.component';
import { BotonAccionComponent } from '@shared/components/boton-accion/boton-accion.component';

/**
 * Modal de seguimiento de caso para Consultar Casos.
 * Muestra información del caso (3 bloques), línea de tiempo,
 * resumen de tiempos (2 tablas) y documentos adjuntos.
 */
@Component({
  selector: 'app-modal-caso',
  imports: [
    Dialog, Fieldset, TableModule,
    SeccionFormularioDinamicoComponent,
    SeccionLineaTiempoComponent,
    SeccionPanelGenericoComponent,
    BotonAccionComponent,
  ],
  templateUrl: './modal-caso.component.html',
  styleUrl: './modal-caso.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalCasoComponent {
  visible = input(false);
  readonly onClose = output<void>();

  /* ── Información del Caso: 3 bloques ── */

  readonly camposAsegurado: CampoFormulario[] = [
    { key: 'nombre', label: 'Nombre', readonly: true },
    { key: 'tipoDoc', label: 'Tipo Doc', readonly: true },
    { key: 'nroDoc', label: 'Nro Doc', readonly: true },
    { key: 'correo', label: 'Correo', type: 'email', readonly: true },
    { key: 'telefono', label: 'Teléfono', type: 'tel', readonly: true },
  ];

  readonly camposRadicado: CampoFormulario[] = [
    { key: 'idRadicado', label: 'ID', readonly: true },
    { key: 'estado', label: 'Estado', readonly: true },
    { key: 'nroPoliza', label: 'Nro Póliza', readonly: true },
    { key: 'codigoProducto', label: 'Código Producto', readonly: true },
    { key: 'consecutivo', label: 'Consecutivo', readonly: true },
  ];

  readonly camposSiniestro: CampoFormulario[] = [
    { key: 'nroSiniestro', label: 'Nro Siniestro', readonly: true },
    { key: 'fechaSiniestro', label: 'Fecha Siniestro', readonly: true },
    { key: 'fechaAviso', label: 'Fecha Aviso', readonly: true },
    { key: 'causa', label: 'Causa', readonly: true },
    { key: 'ciudadOcurrencia', label: 'Ciudad Ocurrencia', readonly: true },
  ];

  valoresAsegurado = signal<Record<string, string>>({});
  valoresRadicado = signal<Record<string, string>>({});
  valoresSiniestro = signal<Record<string, string>>({});

  /* ── Historial del Caso ── */

  etapas = signal<EtapaLineaTiempo[]>([
    {
      label: 'RADICADO',
      completada: true,
      gestiones: [
        {
          titulo: 'CASO ASIGNADO A RADICADOR - RENTAS',
          responsable: 'cristian.marulanda@segurosbolivar.com',
          fecha: '30 de marzo de 2026, 09:06 p. m.',
          observacion: 'Estado: RS | Parte: RS',
        },
      ],
    },
    {
      label: 'DEFINICIÓN',
      completada: true,
      gestiones: [
        {
          titulo: 'CASO ASIGNADO A ANALISTA',
          responsable: 'maria.lopez@segurosbolivar.com',
          fecha: '31 de marzo de 2026, 10:15 a. m.',
          observacion: 'Análisis de cobertura iniciado',
        },
      ],
    },
    {
      label: 'PROVEEDOR',
      activa: true,
      gestiones: [
        {
          titulo: 'ENVIADO A PROVEEDOR MÉDICO',
          responsable: 'juan.garcia@segurosbolivar.com',
          fecha: '2 de abril de 2026, 08:00 a. m.',
          observacion: 'Pendiente concepto médico',
        },
      ],
    },
    { label: 'AUTORIZACIÓN', gestiones: [] },
    { label: 'FINALIZADO', gestiones: [] },
  ]);

  /* ── Resumen de Tiempos ── */

  tiemposPorEtapa = signal([
    { etapa: 'MESA', tiempo: '6m' },
    { etapa: 'RADICADO', tiempo: '-' },
  ]);

  tiemposPorResponsable = signal([
    { usuario: 'RADICADOR', tiempo: '-' },
    { usuario: 'MESA', tiempo: '-' },
  ]);

  /** Cierra el modal. */
  close(): void { this.onClose.emit(); }

  /** Maneja cambio de visibilidad del diálogo. */
  onVisibleChange(v: boolean): void { if (!v) { this.onClose.emit(); } }

  /** Genera reporte del caso. */
  generarReporte(): void {}
}
