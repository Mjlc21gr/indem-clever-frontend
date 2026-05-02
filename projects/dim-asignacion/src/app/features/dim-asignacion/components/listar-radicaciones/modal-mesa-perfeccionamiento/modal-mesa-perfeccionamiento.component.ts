import { Component, input, output, signal, ChangeDetectionStrategy } from '@angular/core';
import { Dialog } from 'primeng/dialog';
import { Divider } from 'primeng/divider';
import { SeccionFormularioDinamicoComponent, type CampoFormulario, SeccionChecklistComponent, SeccionObservacionesGenericaComponent, BotonAccionComponent } from '@shared';

@Component({
  selector: 'app-modal-mesa-perfeccionamiento',
  imports: [
    Dialog, Divider,
    SeccionFormularioDinamicoComponent,
    SeccionChecklistComponent,
    SeccionObservacionesGenericaComponent,
    BotonAccionComponent,
  ],
  templateUrl: './modal-mesa-perfeccionamiento.component.html',
  styleUrl: './modal-mesa-perfeccionamiento.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalMesaPerfeccionamientoComponent {
  visible = input(false);
  readonly onClose = output<void>();

  readonly camposDatosCaso: CampoFormulario[] = [
    { key: 'idClever', label: 'Id Clever', readonly: true },
    { key: 'numCaso', label: '# Caso' },
    { key: 'identificacion', label: '# Identificación' },
    { key: 'correo', label: 'Correo', type: 'email' },
    { key: 'telefono', label: 'Teléfono', type: 'tel' },
  ];

  valoresDatosCaso = signal<Record<string, string>>({});
  observaciones = signal('');

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

  /** Cierra el modal. */
  close(): void { this.onClose.emit(); }

  /** Maneja cambio de visibilidad del diálogo. */
  onVisibleChange(v: boolean): void { if (!v) { this.onClose.emit(); } }

  /** TODO: Conectar al backend — guardar checklist y observaciones de mesa. */
  guardar(): void { /* TODO: implementar */ }
}
