import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { Panel } from 'primeng/panel';

@Component({
  selector: 'app-seccion-panel-generico',
  imports: [Panel],
  templateUrl: './seccion-panel-generico.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SeccionPanelGenericoComponent {
  header = input('');
  emptyMessage = input('Sin datos registrados.');
  toggleable = input(true);
  collapsed = input(true);
}
