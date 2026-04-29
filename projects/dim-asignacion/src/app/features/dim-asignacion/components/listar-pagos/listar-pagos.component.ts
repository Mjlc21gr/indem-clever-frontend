import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { Panel } from 'primeng/panel';
import { TablaDinamicaComponent, ColumnaTabla, AccionFila } from '../../../../shared/components/tabla-dinamica/tabla-dinamica.component';
import { MOCK_ORDENES_PAGO } from '../../../../shared/mocks';

@Component({
  selector: 'app-listar-pagos',
  imports: [Panel, TablaDinamicaComponent],
  templateUrl: './listar-pagos.component.html',
  styleUrl: './listar-pagos.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListarpagosComponent {
  loading = signal(false);
  data = signal<unknown[]>(MOCK_ORDENES_PAGO);

  columnas: ColumnaTabla[] = [
    { field: 'id', header: 'ID', sortable: true, width: '80px' },
    { field: 'fecha', header: 'Fecha', type: 'date', sortable: true },
    { field: 'numeroSiniestro', header: 'No. Siniestro', sortable: true },
    { field: 'cobertura', header: 'Cobertura', sortable: true },
    { field: 'poliza', header: 'Póliza', sortable: true },
    { field: 'total', header: 'Total', type: 'currency', sortable: true },
    { field: 'info', header: 'Info.', sortable: false },
  ];

  acciones = [
    { action: 'ver', icon: 'pi pi-eye', tooltip: 'Ver detalle', severity: 'info' },
    { action: 'editar', icon: 'pi pi-pencil', tooltip: 'Editar', severity: 'success' },
  ];

  onAccion(event: AccionFila): void {
    // TODO: implement action handling
  }
}
