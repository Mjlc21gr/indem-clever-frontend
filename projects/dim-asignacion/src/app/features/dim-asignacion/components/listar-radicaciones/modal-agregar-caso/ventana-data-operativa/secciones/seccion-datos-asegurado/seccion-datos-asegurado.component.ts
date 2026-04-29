import { Component, model, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputText } from 'primeng/inputtext';
import { Fieldset } from 'primeng/fieldset';
import { Fluid } from 'primeng/fluid';

/** Sección: Datos del Asegurado (Data Operativa). */
@Component({
  selector: 'app-seccion-datos-asegurado',
  imports: [FormsModule, InputText, Fieldset, Fluid],
  templateUrl: './seccion-datos-asegurado.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SeccionDatosAseguradoComponent {
  nombreCliente = model('');
  tipoDocumentoClever = model('');
  numeroDocumentoClever = model('');
  tipoPersona = model('');
  nombreEmpresaData = model('');
  estadoCliente = model('');
}
