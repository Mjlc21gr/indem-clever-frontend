import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { Panel } from 'primeng/panel';
import { TablaDinamicaComponent, type ColumnaTabla, type AccionFila, MOCK_ANALISIS } from '@shared';
import { ModalAnalisisComponent } from '../listar-analisis/modal-analisis/modal-analisis.component';

@Component({
  selector: 'app-listar-analisis-linea',
  imports: [Panel, TablaDinamicaComponent, ModalAnalisisComponent],
  templateUrl: './listar-analisis-linea.component.html',
  styleUrl: './listar-analisis-linea.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListaranalisislineaComponent {
  loading = signal(false);
  data = signal<unknown[]>(MOCK_ANALISIS);

  columnas: ColumnaTabla[] = [
    { field: 'id', header: 'ID', sortable: true, width: '80px' },
    { field: 'nombre', header: 'Nombre', sortable: true },
    { field: 'numeroPoliza', header: 'Numero Poliza', sortable: true },
    { field: 'fechaAviso', header: 'Fecha Aviso', type: 'date', sortable: true },
    { field: 'fechaSiniestro', header: 'Fecha Siniestro', type: 'date', sortable: true },
    { field: 'cobertura', header: 'Cobertura', sortable: true },
    { field: 'decisionIA', header: 'Decisión IA', type: 'tag', sortable: true, tagMap: {
      'Aprobado': { label: 'Aprobado', severity: 'success' },
      'Rechazado': { label: 'Rechazado', severity: 'danger' },
      'Pendiente': { label: 'Pendiente', severity: 'warn' },
      'En análisis': { label: 'En análisis', severity: 'info' },
    }},
    { field: 'tipoPoliza', header: 'Tipo Poliza', sortable: true },
    { field: 'estado', header: 'Estado', type: 'tag', sortable: true, tagMap: {
      'Activo': { label: 'Activo', severity: 'success' },
      'Inactivo': { label: 'Inactivo', severity: 'danger' },
      'En proceso': { label: 'En proceso', severity: 'info' },
      'Cerrado': { label: 'Cerrado', severity: 'secondary' },
    }},
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
