import { Component, input, output, signal, ChangeDetectionStrategy } from '@angular/core';
import { Dialog } from 'primeng/dialog';
import { Button } from 'primeng/button';
import { Divider } from 'primeng/divider';
import { SeccionDatosCasoComponent } from './secciones/seccion-datos-caso/seccion-datos-caso.component';
import { SeccionChecklistComponent } from './secciones/seccion-checklist/seccion-checklist.component';
import { SeccionObservacionesMesaComponent } from './secciones/seccion-observaciones-mesa/seccion-observaciones-mesa.component';

/** Modal: Mesa de Perfeccionamiento. */
@Component({
  selector: 'app-modal-mesa-perfeccionamiento',
  imports: [
    Dialog, Button, Divider,
    SeccionDatosCasoComponent,
    SeccionChecklistComponent,
    SeccionObservacionesMesaComponent,
  ],
  templateUrl: './modal-mesa-perfeccionamiento.component.html',
  styleUrl: './modal-mesa-perfeccionamiento.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalMesaPerfeccionamientoComponent {
  /** Controls the visibility of the dialog. */
  visible = input(false);

  /** Emits when the dialog is closed. */
  readonly onClose = output<void>();

  /* Datos del caso */
  idClever = signal('');
  numCaso = signal('');
  identificacion = signal('');
  correo = signal('');
  telefono = signal('');

  /* Checklist */
  regCivilDefuncion = signal(false);
  docIdentidadAsegurado = signal(false);
  epicrisis = signal(false);
  certFiscalia = signal(false);
  sentenciaFecha = signal(false);
  croquis = signal(false);
  dictamenCapacidad = signal(false);
  regCivilBeneficiarios = signal(false);
  docBeneficiarios = signal(false);
  formB114 = signal(false);
  formB121 = signal(false);
  certHospitalizacion = signal(false);
  certIncapacidad = signal(false);
  examenesDiagnostico = signal(false);
  formB337 = signal(false);
  pruebaAlcoholemia = signal(false);
  reciboFactura = signal(false);
  certDeuda = signal(false);

  /* Observaciones */
  observaciones = signal('');

  /** Closes the dialog. */
  close(): void {
    this.onClose.emit();
  }

  /** Handles PrimeNG visibleChange when X button or escape is pressed. */
  onVisibleChange(value: boolean): void {
    if (!value) {
      this.onClose.emit();
    }
  }

  /** Saves the mesa de perfeccionamiento data. */
  guardar(): void {
    // TODO: call service
  }
}
