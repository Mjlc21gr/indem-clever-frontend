import { Component, input, model, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Textarea } from 'primeng/textarea';
import { Fieldset } from 'primeng/fieldset';
import { Fluid } from 'primeng/fluid';

@Component({
  selector: 'app-seccion-observaciones-generica',
  imports: [FormsModule, Textarea, Fieldset, Fluid],
  templateUrl: './seccion-observaciones-generica.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SeccionObservacionesGenericaComponent {
  legend = input('Observaciones');
  placeholder = input('Añadir observaciones...');
  rows = input(3);
  readonly = input(false);
  valor = model('');
}
