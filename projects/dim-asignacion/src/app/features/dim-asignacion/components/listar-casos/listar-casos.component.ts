import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { TableModule } from 'primeng/table';
import { Panel } from 'primeng/panel';

@Component({
  selector: 'app-listar-casos',
  imports: [TableModule, Panel],
  templateUrl: './listar-casos.component.html',
  styleUrl: './listar-casos.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListarcasosComponent {
  loading = signal(false);
  data = signal<unknown[]>([]);
}
