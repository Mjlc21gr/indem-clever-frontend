import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { TablaDinamicaComponent, type ColumnaTabla, type AccionFila, MOCK_DECISIONES, DialogoConfirmacionComponent } from '@shared';
import { ModalPagoComponent } from './modal-pago/modal-pago.component';

/**
 * Módulo unificado de Decisiones (Órdenes de Pago + Objeciones).
 * El líder aprueba o devuelve casos desde esta vista.
 */
@Component({
  selector: 'app-listar-pagos',
  imports: [TablaDinamicaComponent, ModalPagoComponent, DialogoConfirmacionComponent],
  templateUrl: './listar-pagos.component.html',
  styleUrl: './listar-pagos.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListarpagosComponent {
  loading = signal(false);
  data = signal<unknown[]>(MOCK_DECISIONES);
  showModal = signal(false);
  showConfirm = signal(false);
  confirmTitulo = signal('');
  confirmMensaje = signal('');
  confirmLabel = signal('');
  confirmSeverity = signal<'success' | 'danger' | 'warn' | 'info'>('success');
  accionPendiente = signal('');

  /** Columnas con "Tipo" para distinguir Orden de Pago vs Objeción. */
  readonly columnas: ColumnaTabla[] = [
    { field: 'id', header: 'ID', sortable: true },
    { field: 'tipo', header: 'Tipo', type: 'tag', sortable: true, tagMap: {
      'Orden de Pago': { label: 'Pago', severity: 'success' },
      'Objeción': { label: 'Objeción', severity: 'danger' },
    }},
    { field: 'fecha', header: 'Fecha', type: 'date', sortable: true },
    { field: 'cobertura', header: 'Cobertura', sortable: true },
    { field: 'poliza', header: 'Póliza', sortable: true },
    { field: 'total', header: 'Total', type: 'currency', sortable: true },
  ];

  /** Acciones por fila: info, aprobar, devolver. */
  readonly acciones: { action: string; icon: string; tooltip: string; severity: string }[] = [
    { action: 'info', icon: 'fa-solid fa-circle-info', tooltip: 'Ver detalle', severity: 'info' },
    { action: 'aprobar', icon: 'fa-solid fa-check', tooltip: 'Aprobar', severity: 'success' },
    { action: 'devolver', icon: 'fa-solid fa-rotate-left', tooltip: 'Devolver', severity: 'warn' },
  ];

  /** Maneja acciones de la tabla. */
  onAccion(event: AccionFila): void {
    const row = event.data as { tipo?: string };
    const tipo = row.tipo === 'Objeción' ? 'objeción' : 'orden de pago';

    if (event.action === 'info') {
      this.showModal.set(true);
    }
    if (event.action === 'aprobar') {
      this.accionPendiente.set('aprobar');
      this.confirmTitulo.set(`¿Aprobar esta ${tipo}?`);
      this.confirmMensaje.set(`Esta acción aprobará la ${tipo} y no se puede deshacer. ¿Está seguro?`);
      this.confirmLabel.set('Sí, aprobar');
      this.confirmSeverity.set('success');
      this.showConfirm.set(true);
    }
    if (event.action === 'devolver') {
      this.accionPendiente.set('devolver');
      this.confirmTitulo.set('¿Devolver a análisis?');
      this.confirmMensaje.set('Esta acción devolverá el caso al analista. ¿Está seguro?');
      this.confirmLabel.set('Sí, devolver');
      this.confirmSeverity.set('warn');
      this.showConfirm.set(true);
    }
  }

  /** Confirma acción masiva sobre seleccionados. */
  confirmarMasivo(accion: string): void {
    this.accionPendiente.set(accion);
    if (accion === 'aprobar') {
      this.confirmTitulo.set('¿Aprobar los casos seleccionados?');
      this.confirmMensaje.set('Se aprobarán todos los casos seleccionados. Esta acción no se puede deshacer.');
      this.confirmLabel.set('Sí, aprobar todos');
      this.confirmSeverity.set('success');
    } else {
      this.confirmTitulo.set('¿Devolver los casos seleccionados?');
      this.confirmMensaje.set('Se devolverán todos los casos seleccionados al analista.');
      this.confirmLabel.set('Sí, devolver todos');
      this.confirmSeverity.set('warn');
    }
    this.showConfirm.set(true);
  }

  /** TODO: Conectar al backend — ejecutar acción de aprobación/devolución. */
  onConfirmar(): void { this.showConfirm.set(false); }

  /** Cancela la confirmación. */
  onCancelar(): void { this.showConfirm.set(false); }

  /** Cierra el modal de detalle. */
  closeModal(): void { this.showModal.set(false); }
}
