import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Panel } from 'primeng/panel';

/** Sección: Historial del Caso. */
@Component({
  selector: 'app-seccion-historial',
  imports: [Panel],
  templateUrl: './seccion-historial.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SeccionHistorialComponent {}
