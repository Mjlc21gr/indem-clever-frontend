import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { TablaDinamicaComponent, type ColumnaTabla, type AccionFila, MOCK_INVESTIGADOR } from '@shared';
import { ModalInvestigadorComponent } from './modal-investigador/modal-investigador.component';

@Component({
  selector: 'app-listar-investigador',
  imports: [TablaDinamicaComponent, ModalInvestigadorComponent],
  templateUrl: './listar-investigador.component.html',
  styleUrl: './listar-investigador.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListarinvestigadorComponent {
  loading = signal(false);
  data = signal<unknown[]>(MOCK_INVESTIGADOR);

  columnas: ColumnaTabla[] = [
    { field: 'idRadicado', header: 'ID', sortable: true },
    { field: 'numeroPoliza', header: 'Póliza', sortable: true },
    { field: 'fechaAviso', header: 'F. Aviso', type: 'date', sortable: true },
  ];

  acciones = [
    { action: 'ver', icon: 'fa-solid fa-eye', tooltip: 'Ver análisis', severity: 'info' },
  ];

  showModal = signal(false);

  onAccion(event: AccionFila): void {
    if (event.action === 'ver') { this.showModal.set(true); }
  }

  closeModal(): void { this.showModal.set(false); }
}
