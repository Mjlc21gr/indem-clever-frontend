import { Component, input, output, signal, ChangeDetectionStrategy } from '@angular/core';
import { Dialog } from 'primeng/dialog';
import { Divider } from 'primeng/divider';
import { SeccionFormularioDinamicoComponent } from '@shared/components/secciones/seccion-formulario-dinamico/seccion-formulario-dinamico.component';
import type { CampoFormulario } from '@shared/components/secciones/seccion-formulario-dinamico/seccion-formulario-dinamico.component';
import { SeccionChecklistComponent } from '@shared/components/secciones/seccion-checklist/seccion-checklist.component';
import { SeccionObservacionesGenericaComponent } from '@shared/components/secciones/seccion-observaciones-generica/seccion-observaciones-generica.component';
import { BotonAccionComponent } from '@shared/components/boton-accion/boton-accion.component';

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

  close(): void { this.onClose.emit(); }
  onVisibleChange(v: boolean): void { if (!v) { this.onClose.emit(); } }
  guardar(): void {}
}
