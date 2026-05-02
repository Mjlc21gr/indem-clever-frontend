import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Select } from 'primeng/select';
import { Fieldset } from 'primeng/fieldset';
import { Fluid } from 'primeng/fluid';
import { Divider } from 'primeng/divider';
import { SeccionObservacionesGenericaComponent } from '../seccion-observaciones-generica/seccion-observaciones-generica.component';

@Component({
  selector: 'app-seccion-decision',
  imports: [FormsModule, Select, Fieldset, Fluid, Divider, SeccionObservacionesGenericaComponent],
  templateUrl: './seccion-decision.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SeccionDecisionComponent {
  nuevoEstado = '';
  causalAbordada = '';
  observacionAnalista = signal('');

  readonly opcionesDecision = [
    { label: 'Seleccionar', value: '' },
    { label: 'Definido Pago', value: 'DEFINIDO PAGO' },
    { label: 'Definido Objeción', value: 'DEFINIDO OBJECION' },
    { label: 'Movilizado', value: 'MOVILIZADO' },
    { label: 'Devolver Radicación', value: 'DEVOLVER RADICACION' },
    { label: 'Anular Caso', value: 'ANULAR CASO' },
  ];

  readonly opcionesCausal = [{ label: 'Seleccionar', value: '' }];
}
