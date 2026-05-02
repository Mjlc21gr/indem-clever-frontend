import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { Panel } from 'primeng/panel';
import { TablaDinamicaComponent, type ColumnaTabla, type AccionFila, MOCK_UIFA } from '@shared';
import { ModalUifaComponent } from './modal-uifa/modal-uifa.component';

@Component({
  selector: 'app-listar-uifa',
  imports: [Panel, TablaDinamicaComponent, ModalUifaComponent],
  templateUrl: './listar-uifa.component.html',
  styleUrl: './listar-uifa.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListaruifaComponent {
  loading = signal(false);
  data = signal<unknown[]>(MOCK_UIFA);

  columnas: ColumnaTabla[] = [
    { field: 'idRadicado', header: 'ID Radicado', sortable: true, width: '120px' },
    { field: 'numeroPoliza', header: 'Numero Poliza', sortable: true },
    { field: 'fechaAviso', header: 'Fecha Aviso', type: 'date', sortable: true },
  ];

  acciones = [
    { action: 'ver', icon: 'pi pi-eye', tooltip: 'Ver análisis', severity: 'info' },
  ];

  showModal = signal(false);

  onAccion(event: AccionFila): void {
    if (event.action === 'ver') { this.showModal.set(true); }
  }

  closeModal(): void { this.showModal.set(false); }
}
