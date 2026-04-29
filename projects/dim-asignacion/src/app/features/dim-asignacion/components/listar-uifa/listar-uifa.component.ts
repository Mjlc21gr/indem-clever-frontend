import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { TableModule } from 'primeng/table';
import { Panel } from 'primeng/panel';

@Component({
  selector: 'app-listar-uifa',
  imports: [TableModule, Panel],
  templateUrl: './listar-uifa.component.html',
  styleUrl: './listar-uifa.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListaruifaComponent {
  loading = signal(false);
  data = signal<unknown[]>([]);
}
