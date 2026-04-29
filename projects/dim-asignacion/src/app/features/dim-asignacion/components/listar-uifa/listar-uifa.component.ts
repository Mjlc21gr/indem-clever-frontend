import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { Panel } from 'primeng/panel';
import { TablaDinamicaComponent, ColumnaTabla, AccionFila } from '../../../../shared/components/tabla-dinamica/tabla-dinamica.component';
import { MOCK_UIFA } from '../../../../shared/mocks';

@Component({
  selector: 'app-listar-uifa',
  imports: [Panel, TablaDinamicaComponent],
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
    { action: 'ver', icon: 'pi pi-eye', tooltip: 'Ver detalle', severity: 'info' },
    { action: 'editar', icon: 'pi pi-pencil', tooltip: 'Editar', severity: 'success' },
  ];

  onAccion(event: AccionFila): void {
    // TODO: implement action handling
  }
}
