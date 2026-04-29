import { Component, model, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputText } from 'primeng/inputtext';
import { Fieldset } from 'primeng/fieldset';
import { Fluid } from 'primeng/fluid';

/** Sección: Información del Asegurado. */
@Component({
  selector: 'app-seccion-asegurado',
  imports: [FormsModule, InputText, Fieldset, Fluid],
  templateUrl: './seccion-asegurado.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SeccionAseguradoComponent {
  tipoDocumento = model('');
  numeroDocumento = model('');
  nombre = model('');
  apellidos = model('');
  edad = model('');
  correo = model('');
  telefono = model('');
}
