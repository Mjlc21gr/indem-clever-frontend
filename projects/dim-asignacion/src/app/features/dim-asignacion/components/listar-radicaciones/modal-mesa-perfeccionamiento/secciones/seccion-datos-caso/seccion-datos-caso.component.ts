import { Component, model, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputText } from 'primeng/inputtext';
import { Fieldset } from 'primeng/fieldset';
import { Fluid } from 'primeng/fluid';

/** Sección: Datos del Caso (Mesa de Perfeccionamiento). */
@Component({
  selector: 'app-seccion-datos-caso',
  imports: [FormsModule, InputText, Fieldset, Fluid],
  templateUrl: './seccion-datos-caso.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SeccionDatosCasoComponent {
  idClever = model('');
  numCaso = model('');
  identificacion = model('');
  correo = model('');
  telefono = model('');
}
