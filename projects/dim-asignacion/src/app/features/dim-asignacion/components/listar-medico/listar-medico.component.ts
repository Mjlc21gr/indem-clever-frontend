import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { TableModule } from 'primeng/table';
import { Panel } from 'primeng/panel';

@Component({
  selector: 'app-listar-medico',
  imports: [TableModule, Panel],
  templateUrl: './listar-medico.component.html',
  styleUrl: './listar-medico.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListarmedicoComponent {
  loading = signal(false);
  data = signal<unknown[]>([]);
}
