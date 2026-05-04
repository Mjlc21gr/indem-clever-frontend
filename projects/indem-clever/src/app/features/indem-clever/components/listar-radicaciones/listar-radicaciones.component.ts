import { Component, signal, inject, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TablaDinamicaComponent, type ColumnaTabla, type AccionFila } from '@shared';
import { ModalAgregarCasoComponent } from './modal-agregar-caso/modal-agregar-caso.component';
import { ModalMesaPerfeccionamientoComponent } from './modal-mesa-perfeccionamiento/modal-mesa-perfeccionamiento.component';
import { ModalRadicacionComponent } from './modal-radicacion/modal-radicacion.component';
import { RadicacionesService } from '../../../../core/services/radicaciones.service';
import { NotificacionService } from '../../../../core/services/notificacion.service';
import type { RadicacionResumen } from '../../../../core/models';

@Component({
  selector: 'app-listar-radicaciones',
  imports: [
    TablaDinamicaComponent,
    ModalAgregarCasoComponent,
    ModalMesaPerfeccionamientoComponent,
    ModalRadicacionComponent,
  ],
  templateUrl: './listar-radicaciones.component.html',
  styleUrl: './listar-radicaciones.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListarradicacionesComponent implements OnInit {
  private radicacionesService = inject(RadicacionesService);
  private notificacionService = inject(NotificacionService);

  loading = signal(false);
  data = signal<RadicacionResumen[]>([]);

  /** Definición de columnas para la tabla de radicaciones. */
  columnas: ColumnaTabla[] = [
    { field: 'idRadicado', header: 'ID Radicado', sortable: true, width: '120px' },
    { field: 'numeroPoliza', header: 'Numero Poliza', sortable: true },
    { field: 'fechaAviso', header: 'Fecha Aviso', type: 'date', sortable: true },
    { field: 'decision', header: 'Decisión', type: 'tag', sortable: true, tagMap: {
      'APROBADO': { label: 'Aprobado', severity: 'success' },
      'RECHAZADO': { label: 'Rechazado', severity: 'danger' },
      'PENDIENTE': { label: 'Pendiente', severity: 'warn' },
      'EN_ANALISIS': { label: 'En análisis', severity: 'info' },
    }},
    { field: 'cobertura', header: 'Cobertura', sortable: true },
    { field: 'tipoPoliza', header: 'Tipo Poliza', sortable: true },
    { field: 'estado', header: 'Estado', type: 'tag', sortable: true, tagMap: {
      'R': { label: 'Radicado', severity: 'info' },
      'A': { label: 'Activo', severity: 'success' },
      'I': { label: 'Inactivo', severity: 'danger' },
      'C': { label: 'Cerrado', severity: 'secondary' },
    }},
  ];

  /** Acciones disponibles por fila. */
  acciones = [
    { action: 'ver', icon: 'pi pi-eye', tooltip: 'Ver caso', severity: 'info' },
  ];

  showModalAgregarCaso = signal(false);
  showModalMesaPerfeccionamiento = signal(false);
  showModalRadicacion = signal(false);

  /** Carga las radicaciones desde el backend al iniciar el componente. */
  ngOnInit(): void {
    this.cargarRadicaciones();
  }

  /** Consulta las radicaciones al backend con estado 'R' (Radicado). */
  cargarRadicaciones(): void {
    this.loading.set(true);
    this.radicacionesService
      .listar({ estado: 'R', page: 0, size: 10 })
      .subscribe({
        next: (paginado) => {
          this.data.set(paginado.content);
          this.loading.set(false);
        },
        error: () => {
          this.notificacionService.error('No se pudieron cargar las radicaciones');
          this.loading.set(false);
        },
      });
  }

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
    if (event.action === 'ver') {
      this.showModalRadicacion.set(true);
    }
  }

  closeRadicacion(): void {
    this.showModalRadicacion.set(false);
  }
}
