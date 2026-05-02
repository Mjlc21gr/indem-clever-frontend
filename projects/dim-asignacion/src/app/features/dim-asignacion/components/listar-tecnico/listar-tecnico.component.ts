import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { Panel } from 'primeng/panel';
import { TablaDinamicaComponent, ColumnaTabla, AccionFila } from '../../../../shared/components/tabla-dinamica/tabla-dinamica.component';
import { ModalTecnicoComponent } from './modal-tecnico/modal-tecnico.component';
import { MOCK_TECNICO } from '../../../../shared/mocks';

@Component({
  selector: 'app-listar-tecnico',
  imports: [Panel, TablaDinamicaComponent, ModalTecnicoComponent],
  templateUrl: './listar-tecnico.component.html',
  styleUrl: './listar-tecnico.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListartecnicoComponent {
  loading = signal(false);
  data = signal<unknown[]>(MOCK_TECNICO);

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
