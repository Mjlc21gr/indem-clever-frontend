import { Component, model, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputText } from 'primeng/inputtext';
import { Fieldset } from 'primeng/fieldset';
import { Fluid } from 'primeng/fluid';

/** Sección: Demográfica (Data Operativa). */
@Component({
  selector: 'app-seccion-demografica',
  imports: [FormsModule, InputText, Fieldset, Fluid],
  templateUrl: './seccion-demografica.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SeccionDemograficaComponent {
  demSexo = model('');
  demFechaNacimiento = model('');
  demEdad = model('');
  demDireccion = model('');
  demMunicipio = model('');
}
