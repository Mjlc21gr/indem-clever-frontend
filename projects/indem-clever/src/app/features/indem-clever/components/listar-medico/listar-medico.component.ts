import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { TablaDinamicaComponent, type ColumnaTabla, type AccionFila, MOCK_MEDICO } from '@shared';
import { ModalMedicoComponent } from './modal-medico/modal-medico.component';

@Component({
  selector: 'app-listar-medico',
  imports: [TablaDinamicaComponent, ModalMedicoComponent],
  templateUrl: './listar-medico.component.html',
  styleUrl: './listar-medico.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListarmedicoComponent {
  loading = signal(false);
  data = signal<unknown[]>(MOCK_MEDICO);

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
