import { Component, model, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputText } from 'primeng/inputtext';
import { Textarea } from 'primeng/textarea';
import { Fieldset } from 'primeng/fieldset';
import { Fluid } from 'primeng/fluid';

/** Sección: Información del Siniestro. */
@Component({
  selector: 'app-seccion-siniestro',
  imports: [FormsModule, InputText, Textarea, Fieldset, Fluid],
  templateUrl: './seccion-siniestro.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SeccionSiniestroComponent {
  cucConceptoGeneral = model('');
  coberturaPrincipal = model('');
  fechaSiniestro = model('');
  ciudadOcurrencia = model('');
  causaCodificada = model('');
  intencion = model('');
  accionData = model('');
  casoPadre = model('');
  causa = model('');
  consecuencia = model('');
  observacion = model('');
}
