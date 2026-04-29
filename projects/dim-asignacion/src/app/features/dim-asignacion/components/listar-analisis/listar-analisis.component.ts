import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { TableModule } from 'primeng/table';
import { Panel } from 'primeng/panel';

@Component({
  selector: 'app-listar-analisis',
  imports: [TableModule, Panel],
  templateUrl: './listar-analisis.component.html',
  styleUrl: './listar-analisis.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListaranalisisComponent {
  loading = signal(false);
  data = signal<unknown[]>([]);
}
