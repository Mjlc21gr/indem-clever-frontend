import { Component, model, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputText } from 'primeng/inputtext';
import { Fieldset } from 'primeng/fieldset';
import { Fluid } from 'primeng/fluid';

/** Sección: Información del Radicado. */
@Component({
  selector: 'app-seccion-radicado',
  imports: [FormsModule, InputText, Fieldset, Fluid],
  templateUrl: './seccion-radicado.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SeccionRadicadoComponent {
  numeroPoliza = model('');
  codigoProducto = model('');
  portafolioCodigo = model('');
  portafolioNombre = model('');
  numeroDeRiesgo = model('');
  riesgoCliente = model('');
  cobertura = model('');
  codCobertura = model('');
  fechaAviso = model('');
  valorAsegurado = model('');
  valorAseguradoVida = model('');
  valorAseguradoItp = model('');
  scoreCliente = model('');
  superoPeso = model('');
  masDeUnIngreso = model('');
  aprobacionTerminos = model('');
  nitEmpresa = model('');
  nombreEmpresa = model('');
}
