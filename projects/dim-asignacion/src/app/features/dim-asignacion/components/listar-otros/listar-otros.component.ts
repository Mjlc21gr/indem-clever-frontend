import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { TableModule } from 'primeng/table';
import { Panel } from 'primeng/panel';

@Component({
  selector: 'app-listar-otros',
  imports: [TableModule, Panel],
  templateUrl: './listar-otros.component.html',
  styleUrl: './listar-otros.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListarotrosComponent {
  loading = signal(false);
  data = signal<unknown[]>([]);
}
