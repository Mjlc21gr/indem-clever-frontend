import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { Panel } from 'primeng/panel';
import { TablaDinamicaComponent, ColumnaTabla, AccionFila } from '../../../../shared/components/tabla-dinamica/tabla-dinamica.component';
import { MOCK_RADICACIONES } from '../../../../shared/mocks';

@Component({
  selector: 'app-listar-mesa-perfect',
  imports: [Panel, TablaDinamicaComponent],
  templateUrl: './listar-mesa-perfect.component.html',
  styleUrl: './listar-mesa-perfect.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListarmesaperfectComponent {
  loading = signal(false);
  data = signal<unknown[]>(MOCK_RADICACIONES);

  /** Definición de columnas para la tabla de mesa de perfeccionamiento. */
  columnas: ColumnaTabla[] = [
    { field: 'idRadicado', header: 'ID Radicado', sortable: true, width: '120px' },
    { field: 'numeroPoliza', header: 'Numero Poliza', sortable: true },
    { field: 'fechaAviso', header: 'Fecha Aviso', type: 'date', sortable: true },
    { field: 'decision', header: 'Decisión', type: 'tag', sortable: true, tagMap: {
      'Aprobado': { label: 'Aprobado', severity: 'success' },
      'Rechazado': { label: 'Rechazado', severity: 'danger' },
      'Pendiente': { label: 'Pendiente', severity: 'warn' },
      'En análisis': { label: 'En análisis', severity: 'info' },
    }},
    { field: 'cobertura', header: 'Cobertura', sortable: true },
    { field: 'tipoPoliza', header: 'Tipo Poliza', sortable: true },
    { field: 'estado', header: 'Estado', type: 'tag', sortable: true, tagMap: {
      'Activo': { label: 'Activo', severity: 'success' },
      'Inactivo': { label: 'Inactivo', severity: 'danger' },
      'En proceso': { label: 'En proceso', severity: 'info' },
      'Cerrado': { label: 'Cerrado', severity: 'secondary' },
    }},
  ];

  /** Acciones disponibles por fila. */
  acciones = [
    { action: 'ver', icon: 'pi pi-eye', tooltip: 'Ver detalle', severity: 'info' },
    { action: 'editar', icon: 'pi pi-pencil', tooltip: 'Editar', severity: 'success' },
  ];

  /** Handles row action clicks. */
  onAccion(event: AccionFila): void {
    // TODO: implement action handling
  }
}
