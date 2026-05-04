import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { TablaDinamicaComponent, type ColumnaTabla, type AccionFila, MOCK_OBJECIONES, DialogoConfirmacionComponent } from '@shared';
import { ModalObjecionComponent } from './modal-objecion/modal-objecion.component';

@Component({
  selector: 'app-listar-otros',
  imports: [TablaDinamicaComponent, ModalObjecionComponent, DialogoConfirmacionComponent],
  templateUrl: './listar-otros.component.html',
  styleUrl: './listar-otros.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListarotrosComponent {
  loading = signal(false);
  data = signal<unknown[]>(MOCK_OBJECIONES);
  showModal = signal(false);
  showConfirm = signal(false);
  confirmTitulo = signal('');
  confirmMensaje = signal('');
  confirmLabel = signal('');
  confirmSeverity = signal<'success' | 'danger' | 'warn' | 'info'>('success');
  filaActual = signal<unknown>(null);
  accionPendiente = signal('');

  /** Definición de columnas para la tabla de objeciones. */
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
      this.filaActual.set(event.data);
      this.accionPendiente.set('aprobar');
      this.confirmTitulo.set('¿Aprobar esta objeción?');
      this.confirmMensaje.set('Esta acción aprobará la objeción y no se puede deshacer. ¿Está seguro?');
      this.confirmLabel.set('Sí, aprobar');
      this.confirmSeverity.set('success');
      this.showConfirm.set(true);
    }
    if (event.action === 'devolver') {
      this.filaActual.set(event.data);
      this.accionPendiente.set('devolver');
      this.confirmTitulo.set('¿Devolver a análisis?');
      this.confirmMensaje.set('Esta acción devolverá el caso al analista. ¿Está seguro?');
      this.confirmLabel.set('Sí, devolver');
      this.confirmSeverity.set('warn');
      this.showConfirm.set(true);
    }
  }

  onConfirmar(): void {
    // TODO: ejecutar acción con this.filaActual() y this.accionPendiente()
    this.showConfirm.set(false);
  }

  onCancelar(): void {
    this.showConfirm.set(false);
  }

  closeModal(): void { this.showModal.set(false); }
}
