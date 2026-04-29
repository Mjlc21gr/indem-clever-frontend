import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { TableModule } from 'primeng/table';
import { Panel } from 'primeng/panel';

@Component({
  selector: 'app-listar-investigador',
  imports: [TableModule, Panel],
  templateUrl: './listar-investigador.component.html',
  styleUrl: './listar-investigador.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListarinvestigadorComponent {
  loading = signal(false);
  data = signal<unknown[]>([]);
}
