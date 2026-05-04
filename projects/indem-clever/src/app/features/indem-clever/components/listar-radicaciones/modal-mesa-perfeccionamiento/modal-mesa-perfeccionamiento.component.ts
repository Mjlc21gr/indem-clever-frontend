import { Component, input, output, signal, ChangeDetectionStrategy } from '@angular/core';
import { SeccionFormularioDinamicoComponent, type CampoFormulario, SeccionChecklistComponent, SeccionObservacionesGenericaComponent, BotonAccionComponent } from '@shared';

@Component({
  selector: 'app-modal-mesa-perfeccionamiento',
  imports: [
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
    { key: 'idClever', label: 'Id Clever' },
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

  maximized = false;

  /** Cierra el modal. */
  close(): void { this.maximized = false; this.onClose.emit(); }

  /** Alterna entre maximizado y normal. */
  toggleMaximize(): void { this.maximized = !this.maximized; }

  /** TODO: Conectar al backend — guardar checklist y observaciones de mesa. */
  guardar(): void { /* TODO: implementar */ }
}
