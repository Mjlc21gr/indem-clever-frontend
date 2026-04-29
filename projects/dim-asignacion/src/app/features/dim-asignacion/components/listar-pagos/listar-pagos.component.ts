import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { TableModule } from 'primeng/table';
import { Panel } from 'primeng/panel';

@Component({
  selector: 'app-listar-pagos',
  imports: [TableModule, Panel],
  templateUrl: './listar-pagos.component.html',
  styleUrl: './listar-pagos.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListarpagosComponent {
  loading = signal(false);
  data = signal<unknown[]>([]);
}
