import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { TableModule } from 'primeng/table';
import { Panel } from 'primeng/panel';

@Component({
  selector: 'app-listar-mis-analisis',
  imports: [TableModule, Panel],
  templateUrl: './listar-mis-analisis.component.html',
  styleUrl: './listar-mis-analisis.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListarmisanalisisComponent {
  loading = signal(false);
  data = signal<unknown[]>([]);
}
