import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { TableModule } from 'primeng/table';
import { Panel } from 'primeng/panel';
import { Button } from 'primeng/button';
import { Toolbar } from 'primeng/toolbar';
import { ModalAgregarCasoComponent } from '../modal-agregar-caso/modal-agregar-caso.component';
import { ModalMesaPerfeccionamientoComponent } from '../modal-mesa-perfeccionamiento/modal-mesa-perfeccionamiento.component';

@Component({
  selector: 'app-listar-radicaciones',
  imports: [
    TableModule,
    Panel,
    Button,
    Toolbar,
    ModalAgregarCasoComponent,
    ModalMesaPerfeccionamientoComponent,
  ],
  templateUrl: './listar-radicaciones.component.html',
  styleUrl: './listar-radicaciones.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListarradicacionesComponent {
  loading = signal(false);
  data = signal<unknown[]>([]);

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
}
