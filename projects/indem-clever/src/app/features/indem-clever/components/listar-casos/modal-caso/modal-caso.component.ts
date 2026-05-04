import { Component, input, output, signal, ChangeDetectionStrategy } from '@angular/core';
import { SeccionLineaTiempoComponent, type EtapaLineaTiempo, SeccionPanelGenericoComponent, BotonAccionComponent } from '@shared';

/** Par label-valor para el panel de datos. */
interface DatoPar {
  label: string;
  valor: string;
}

/** Bloque de datos con título y pares. */
interface BloqueInfo {
  titulo: string;
  icono: string;
  datos: DatoPar[];
}

/**
 * Modal de seguimiento de caso — Consultar Casos.
 * Muestra panel de datos (solo lectura), línea de tiempo,
 * resumen de tiempos y documentos adjuntos.
 */
@Component({
  selector: 'app-modal-caso',
  imports: [SeccionLineaTiempoComponent, SeccionPanelGenericoComponent, BotonAccionComponent],
  templateUrl: './modal-caso.component.html',
  styleUrls: ['./modal-caso.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalCasoComponent {
  visible = input(false);
  readonly onClose = output<void>();

  /** Bloques de información del caso (mock — vendrá del backend). */
  readonly bloquesInfo: BloqueInfo[] = [
    {
      titulo: 'Datos del Asegurado',
      icono: 'fa-solid fa-user',
      datos: [
        { label: 'Nombre', valor: 'Johny henrry' },
        { label: 'Tipo Doc', valor: 'CC' },
        { label: 'Nro Doc', valor: 'N/A' },
        { label: 'Correo', valor: 'johnnymolina-11@hotmail.com' },
        { label: 'Teléfono', valor: '3003091882' },
      ],
    },
    {
      titulo: 'Información del Radicado',
      icono: 'fa-solid fa-file-lines',
      datos: [
        { label: 'ID', valor: 'CL 180255' },
        { label: 'Estado', valor: 'N/A' },
        { label: 'Nro Póliza', valor: 'N/A' },
        { label: 'Código Producto', valor: 'N/A' },
        { label: 'Consecutivo', valor: 'N/A' },
      ],
    },
    {
      titulo: 'Información del Siniestro',
      icono: 'fa-solid fa-triangle-exclamation',
      datos: [
        { label: 'Nro Siniestro', valor: '"Pendiente Crear"' },
        { label: 'Fecha Siniestro', valor: '2025/12/4' },
        { label: 'Fecha Aviso', valor: '2026-03-30 21:05:48' },
        { label: 'Causa', valor: 'N/A' },
        { label: 'Ciudad', valor: 'Barranquilla (ATLANTICO)' },
      ],
    },
  ];

  /** Etapas del historial (mock). */
  etapas = signal<EtapaLineaTiempo[]>([
    {
      label: 'RADICADO', completada: true,
      gestiones: [{
        titulo: 'CASO ASIGNADO A RADICADOR - RENTAS',
        responsable: 'cristian.marulanda@segurosbolivar.com',
        fecha: '30 de marzo de 2026, 09:06 p. m.',
        observacion: 'Estado: RS | Parte: RS',
      }],
    },
    {
      label: 'DEFINICIÓN', completada: true,
      gestiones: [{
        titulo: 'CASO ASIGNADO A ANALISTA',
        responsable: 'maria.lopez@segurosbolivar.com',
        fecha: '31 de marzo de 2026, 10:15 a. m.',
        observacion: 'Análisis de cobertura iniciado',
      }],
    },
    {
      label: 'PROVEEDOR', activa: true,
      gestiones: [{
        titulo: 'ENVIADO A PROVEEDOR MÉDICO',
        responsable: 'juan.garcia@segurosbolivar.com',
        fecha: '2 de abril de 2026, 08:00 a. m.',
        observacion: 'Pendiente concepto médico',
      }],
    },
    { label: 'AUTORIZACIÓN', gestiones: [] },
    { label: 'FINALIZADO', gestiones: [] },
  ]);

  /** Resumen de tiempos (mock). */
  tiemposPorEtapa = signal([
    { etapa: 'MESA', tiempo: '6m' },
    { etapa: 'RADICADO', tiempo: '-' },
  ]);

  tiemposPorResponsable = signal([
    { usuario: 'RADICADOR', tiempo: '-' },
    { usuario: 'MESA', tiempo: '-' },
  ]);

  maximized = false;

  /** Cierra el modal. */
  close(): void { this.maximized = false; this.onClose.emit(); }

  /** Alterna entre maximizado y normal. */
  toggleMaximize(): void { this.maximized = !this.maximized; }

  /** TODO: Conectar al backend — generar reporte PDF del caso. */
  generarReporte(): void { /* TODO: implementar */ }
}
