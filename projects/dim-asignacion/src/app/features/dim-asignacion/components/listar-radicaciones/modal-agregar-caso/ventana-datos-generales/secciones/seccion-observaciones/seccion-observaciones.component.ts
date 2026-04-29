import { Component, model, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Textarea } from 'primeng/textarea';
import { Fieldset } from 'primeng/fieldset';
import { Fluid } from 'primeng/fluid';

/** Sección: Observaciones del Radicado. */
@Component({
  selector: 'app-seccion-observaciones',
  imports: [FormsModule, Textarea, Fieldset, Fluid],
  templateUrl: './seccion-observaciones.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SeccionObservacionesComponent {
  observacionRadicado = model('');
}
