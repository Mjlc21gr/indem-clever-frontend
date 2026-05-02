import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { Panel } from 'primeng/panel';
import { TablaDinamicaComponent, ColumnaTabla, AccionFila } from '../../../../shared/components/tabla-dinamica/tabla-dinamica.component';
import { MOCK_OBJECIONES } from '../../../../shared/mocks';
import { ModalObjecionComponent } from './modal-objecion/modal-objecion.component';
import { DialogoConfirmacionComponent } from '../../../../shared/components/dialogo-confirmacion/dialogo-confirmacion.component';

@Component({
  selector: 'app-listar-otros',
  imports: [Panel, TablaDinamicaComponent, ModalObjecionComponent, DialogoConfirmacionComponent],
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

  columnas: ColumnaTabla[] = [
    { field: 'id', header: 'ID', sortable: true, width: '80px' },
    { field: 'fecha', header: 'Fecha', type: 'date', sortable: true },
    { field: 'numeroSiniestro', header: 'No. Siniestro', sortable: true },
    { field: 'cobertura', header: 'Cobertura', sortable: true },
    { field: 'poliza', header: 'Póliza', sortable: true },
    { field: 'total', header: 'Total', type: 'currency', sortable: true },
  ];

  acciones = [
    { action: 'info', icon: 'pi pi-info-circle', tooltip: 'Ver detalle', severity: 'info' },
    { action: 'aprobar', icon: 'pi pi-check', tooltip: 'Aprobar', severity: 'success' },
    { action: 'devolver', icon: 'pi pi-replay', tooltip: 'Devolver a análisis', severity: 'warn' },
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
