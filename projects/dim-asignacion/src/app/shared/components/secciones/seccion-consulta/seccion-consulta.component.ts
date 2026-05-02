import { Component, model, output, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputText } from 'primeng/inputtext';
import { Fieldset } from 'primeng/fieldset';
import { Fluid } from 'primeng/fluid';
import { Button } from 'primeng/button';

/** Sección: Consultar Data Operativa. */
@Component({
  selector: 'app-seccion-consulta',
  imports: [FormsModule, InputText, Fieldset, Fluid, Button],
  templateUrl: './seccion-consulta.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SeccionConsultaComponent {
  consultaTipoDoc = model('');
  consultaNumDoc = model('');

  /** Emits when the user clicks "Consultar". */
  readonly consultar = output<void>();

  /** Triggers the consultation. */
  onConsultar(): void {
    this.consultar.emit();
  }
}
