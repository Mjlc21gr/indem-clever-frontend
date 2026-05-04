import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { TablaDinamicaComponent, type ColumnaTabla, type AccionFila, MOCK_ORDENES_PAGO, DialogoConfirmacionComponent } from '@shared';
import { ModalPagoComponent } from './modal-pago/modal-pago.component';

@Component({
  selector: 'app-listar-pagos',
  imports: [TablaDinamicaComponent, ModalPagoComponent, DialogoConfirmacionComponent],
  templateUrl: './listar-pagos.component.html',
  styleUrl: './listar-pagos.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListarpagosComponent {
  loading = signal(false);
  data = signal<unknown[]>(MOCK_ORDENES_PAGO);
  showModal = signal(false);
  showConfirm = signal(false);
  confirmTitulo = signal('');
  confirmMensaje = signal('');
  confirmLabel = signal('');
  confirmSeverity = signal<'success' | 'danger' | 'warn' | 'info'>('success');
  accionPendiente = signal('');

  /** Definición de columnas para la tabla de órdenes de pago. */
  readonly columnas: ColumnaTabla[] = [
    { field: 'id', header: 'ID', sortable: true },
    { field: 'fecha', header: 'Fecha', type: 'date', sortable: true },
    { field: 'numeroSiniestro', header: 'Siniestro', sortable: true },
    { field: 'cobertura', header: 'Cobertura', sortable: true },
    { field: 'poliza', header: 'Póliza', sortable: true },
    { field: 'total', header: 'Total', type: 'currency', sortable: true },
  ];

  /** Acciones disponibles por fila. */
  readonly acciones: { action: string; icon: string; tooltip: string; severity: string }[] = [
    { action: 'info', icon: 'fa-solid fa-circle-info', tooltip: 'Ver detalle', severity: 'info' },
    { action: 'aprobar', icon: 'fa-solid fa-check', tooltip: 'Aprobar', severity: 'success' },
    { action: 'devolver', icon: 'fa-solid fa-rotate-left', tooltip: 'Devolver a análisis', severity: 'warn' },
  ];

  onAccion(event: AccionFila): void {
    if (event.action === 'info') {
      this.showModal.set(true);
    }
    if (event.action === 'aprobar') {
      this.accionPendiente.set('aprobar');
      this.confirmTitulo.set('¿Aprobar esta orden de pago?');
      this.confirmMensaje.set('Esta acción aprobará el pago y no se puede deshacer. ¿Está seguro?');
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

  onConfirmar(): void {
    // TODO: ejecutar acción
    this.showConfirm.set(false);
  }

  onCancelar(): void {
    this.showConfirm.set(false);
  }

  closeModal(): void { this.showModal.set(false); }
}
