import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { TablaDinamicaComponent, type ColumnaTabla, type AccionFila, MOCK_RADICACIONES } from '@shared';

@Component({
  selector: 'app-listar-mesa-perfect',
  imports: [TablaDinamicaComponent],
  templateUrl: './listar-mesa-perfect.component.html',
  styleUrl: './listar-mesa-perfect.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListarmesaperfectComponent {
  loading = signal(false);
  data = signal<unknown[]>(MOCK_RADICACIONES);

  /** Definición de columnas para la tabla de mesa de perfeccionamiento. */
  columnas: ColumnaTabla[] = [
    { field: 'idRadicado', header: 'ID', sortable: true },
    { field: 'numeroPoliza', header: 'Póliza', sortable: true },
    { field: 'cobertura', header: 'Cobertura', sortable: true },
    { field: 'fechaAviso', header: 'F. Aviso', type: 'date', sortable: true },
    { field: 'decision', header: 'Decisión', type: 'tag', sortable: true, tagMap: {
      'Aprobado': { label: 'Aprobado', severity: 'success' },
      'Rechazado': { label: 'Rechazado', severity: 'danger' },
      'Pendiente': { label: 'Pendiente', severity: 'warn' },
      'En análisis': { label: 'En análisis', severity: 'info' },
    }},
    { field: 'estado', header: 'Estado', type: 'tag', sortable: true, tagMap: {
      'Activo': { label: 'Activo', severity: 'success' },
      'Inactivo': { label: 'Inactivo', severity: 'danger' },
      'En proceso': { label: 'En proceso', severity: 'info' },
      'Cerrado': { label: 'Cerrado', severity: 'secondary' },
    }},
  ];

  /** Acciones disponibles por fila. */
  acciones = [
    { action: 'ver', icon: 'fa-solid fa-eye', tooltip: 'Ver detalle', severity: 'info' },
    { action: 'editar', icon: 'fa-solid fa-pen', tooltip: 'Editar', severity: 'success' },
  ];

  /** Handles row action clicks. */
  onAccion(event: AccionFila): void {
    // TODO: implement action handling
  }
}
