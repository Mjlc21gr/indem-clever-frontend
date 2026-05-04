import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SeccionObservacionesGenericaComponent } from '../seccion-observaciones-generica/seccion-observaciones-generica.component';

/** Sección: Análisis de Terceros (Decisión) — sb-ui. */
@Component({
  selector: 'app-seccion-decision',
  imports: [FormsModule, SeccionObservacionesGenericaComponent],
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
