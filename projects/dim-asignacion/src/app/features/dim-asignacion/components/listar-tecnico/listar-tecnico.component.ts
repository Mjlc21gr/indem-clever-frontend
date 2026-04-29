import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { TableModule } from 'primeng/table';
import { Panel } from 'primeng/panel';

@Component({
  selector: 'app-listar-tecnico',
  imports: [TableModule, Panel],
  templateUrl: './listar-tecnico.component.html',
  styleUrl: './listar-tecnico.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListartecnicoComponent {
  loading = signal(false);
  data = signal<unknown[]>([]);
}
