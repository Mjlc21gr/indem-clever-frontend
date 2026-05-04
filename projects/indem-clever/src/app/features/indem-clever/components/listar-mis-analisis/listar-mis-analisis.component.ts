import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { TablaDinamicaComponent, type ColumnaTabla, type AccionFila, MOCK_ANALISIS } from '@shared';
import { ModalAnalisisComponent } from '../listar-analisis/modal-analisis/modal-analisis.component';

@Component({
  selector: 'app-listar-mis-analisis',
  imports: [TablaDinamicaComponent, ModalAnalisisComponent],
  templateUrl: './listar-mis-analisis.component.html',
  styleUrl: './listar-mis-analisis.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListarmisanalisisComponent {
  loading = signal(false);
  data = signal<unknown[]>(MOCK_ANALISIS);

  columnas: ColumnaTabla[] = [
    { field: 'id', header: 'ID', sortable: true },
    { field: 'nombre', header: 'Asegurado', sortable: true },
    { field: 'numeroPoliza', header: 'Póliza', sortable: true },
    { field: 'fechaAviso', header: 'F. Aviso', type: 'date', sortable: true },
    { field: 'cobertura', header: 'Cobertura', sortable: true },
    { field: 'decisionIA', header: 'Decisión IA', type: 'tag', sortable: true, tagMap: {
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

  acciones = [
    { action: 'ver', icon: 'fa-solid fa-eye', tooltip: 'Ver análisis', severity: 'info' },
  ];

  showModal = signal(false);

  onAccion(event: AccionFila): void {
    if (event.action === 'ver') { this.showModal.set(true); }
  }

  closeModal(): void { this.showModal.set(false); }
}
