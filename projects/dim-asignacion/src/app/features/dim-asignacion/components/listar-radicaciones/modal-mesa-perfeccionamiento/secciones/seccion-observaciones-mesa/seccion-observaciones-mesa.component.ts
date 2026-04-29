import { Component, model, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Textarea } from 'primeng/textarea';
import { Fieldset } from 'primeng/fieldset';
import { Fluid } from 'primeng/fluid';

/** Sección: Observaciones (Mesa de Perfeccionamiento). */
@Component({
  selector: 'app-seccion-observaciones-mesa',
  imports: [FormsModule, Textarea, Fieldset, Fluid],
  templateUrl: './seccion-observaciones-mesa.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SeccionObservacionesMesaComponent {
  observaciones = model('');
}
