import { Component, model, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputText } from 'primeng/inputtext';
import { Fieldset } from 'primeng/fieldset';
import { Fluid } from 'primeng/fluid';

/** Sección: Información Bancaria. */
@Component({
  selector: 'app-seccion-bancaria',
  imports: [FormsModule, InputText, Fieldset, Fluid],
  templateUrl: './seccion-bancaria.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SeccionBancariaComponent {
  numeroCuenta = model('');
  entidadBancaria = model('');
  codBanco = model('');
  tipoCuenta = model('');
  aprobacionCuenta = model('');
}
