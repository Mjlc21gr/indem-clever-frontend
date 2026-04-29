import { Component, model, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputText } from 'primeng/inputtext';
import { Fieldset } from 'primeng/fieldset';
import { Fluid } from 'primeng/fluid';
import { Message } from 'primeng/message';

/** Sección: Número del Siniestro. */
@Component({
  selector: 'app-seccion-numero-siniestro',
  imports: [FormsModule, InputText, Fieldset, Fluid, Message],
  templateUrl: './seccion-numero-siniestro.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SeccionNumeroSiniestroComponent {
  numeroSiniestro = model('');
  superoPesoDocumentos = model('');
}
