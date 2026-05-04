import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { TablaDinamicaComponent, type ColumnaTabla, type AccionFila, MOCK_TECNICO } from '@shared';
import { ModalTecnicoComponent } from './modal-tecnico/modal-tecnico.component';

@Component({
  selector: 'app-listar-tecnico',
  imports: [TablaDinamicaComponent, ModalTecnicoComponent],
  templateUrl: './listar-tecnico.component.html',
  styleUrl: './listar-tecnico.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListartecnicoComponent {
  loading = signal(false);
  data = signal<unknown[]>(MOCK_TECNICO);

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
