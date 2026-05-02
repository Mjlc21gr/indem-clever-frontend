import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { Fieldset } from 'primeng/fieldset';

/** Sección: Información del Caso. */
@Component({
  selector: 'app-seccion-info-caso',
  imports: [Fieldset],
  templateUrl: './seccion-info-caso.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SeccionInfoCasoComponent {
  numeroCaso = input('');
  estado = input('');
  fechaCreacion = input('');
}
