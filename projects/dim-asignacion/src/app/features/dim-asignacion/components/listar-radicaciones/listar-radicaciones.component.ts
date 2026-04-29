import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { Panel } from 'primeng/panel';
import { Button } from 'primeng/button';
import { TablaDinamicaComponent, ColumnaTabla, AccionFila } from '../../../../shared/components/tabla-dinamica/tabla-dinamica.component';
import { MOCK_RADICACIONES } from '../../../../shared/mocks';
import { ModalAgregarCasoComponent } from './modal-agregar-caso/modal-agregar-caso.component';
import { ModalMesaPerfeccionamientoComponent } from './modal-mesa-perfeccionamiento/modal-mesa-perfeccionamiento.component';

@Component({
  selector: 'app-listar-radicaciones',
  imports: [
    Panel,
    Button,
    TablaDinamicaComponent,
    ModalAgregarCasoComponent,
    ModalMesaPerfeccionamientoComponent,
  ],
  templateUrl: './listar-radicaciones.component.html',
  styleUrl: './listar-radicaciones.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListarradicacionesComponent {
  loading = signal(false);
  data = signal<unknown[]>(MOCK_RADICACIONES);

  /** Definición de columnas para la tabla de radicaciones. */
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

  /** Controls visibility of the Agregar Caso modal. */
  showModalAgregarCaso = signal(false);

  /** Controls visibility of the Mesa de Perfeccionamiento modal. */
  showModalMesaPerfeccionamiento = signal(false);

  /** Opens the Agregar Caso modal. */
  openAgregarCaso(): void {
    this.showModalAgregarCaso.set(true);
  }

  /** Opens the Mesa de Perfeccionamiento modal. */
  openMesaPerfeccionamiento(): void {
    this.showModalMesaPerfeccionamiento.set(true);
  }

  /** Closes the Agregar Caso modal. */
  closeAgregarCaso(): void {
    this.showModalAgregarCaso.set(false);
  }

  /** Closes the Mesa de Perfeccionamiento modal. */
  closeMesaPerfeccionamiento(): void {
    this.showModalMesaPerfeccionamiento.set(false);
  }

  /** Handles row action clicks. */
  onAccion(event: AccionFila): void {
    // TODO: implement action handling
  }
}
