import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { TablaDinamicaComponent, type ColumnaTabla, type AccionFila } from '@shared';
import { ModalCasoComponent } from './modal-caso/modal-caso.component';

@Component({
  selector: 'app-listar-casos',
  imports: [TablaDinamicaComponent, ModalCasoComponent],
  templateUrl: './listar-casos.component.html',
  styleUrl: './listar-casos.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListarcasosComponent {
  loading = signal(false);
  data = signal<unknown[]>([
    { idRadicado: 'RAD-001', documento: '1022436559', fechaAviso: '2026-03-15', estado: 'Activo' },
    { idRadicado: 'RAD-002', documento: '80123456', fechaAviso: '2026-03-18', estado: 'En proceso' },
    { idRadicado: 'RAD-003', documento: '52987654', fechaAviso: '2026-03-20', estado: 'Cerrado' },
    { idRadicado: 'RAD-004', documento: '1098765432', fechaAviso: '2026-03-22', estado: 'Activo' },
    { idRadicado: 'RAD-005', documento: '79654321', fechaAviso: '2026-03-25', estado: 'En proceso' },
  ]);
  showModal = signal(false);

  /** Definición de columnas para la tabla de consultar casos. */
  readonly columnas: ColumnaTabla[] = [
    { field: 'idRadicado', header: 'ID', sortable: true },
    { field: 'documento', header: 'Documento', sortable: true },
    { field: 'fechaAviso', header: 'F. Aviso', type: 'date', sortable: true },
    { field: 'estado', header: 'Estado', type: 'tag', sortable: true, tagMap: {
      'Activo': { label: 'Activo', severity: 'success' },
      'En proceso': { label: 'En proceso', severity: 'info' },
      'Cerrado': { label: 'Cerrado', severity: 'secondary' },
    }},
  ];

  /** Acciones disponibles por fila. */
  readonly acciones: { action: string; icon: string; tooltip: string; severity: string }[] = [
    { action: 'ver', icon: 'fa-solid fa-eye', tooltip: 'Ver caso', severity: 'info' },
  ];

  onAccion(event: AccionFila): void {
    if (event.action === 'ver') {
      this.showModal.set(true);
    }
  }

  closeModal(): void { this.showModal.set(false); }
}
