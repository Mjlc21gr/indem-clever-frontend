import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { TableModule } from 'primeng/table';
import { Panel } from 'primeng/panel';

@Component({
  selector: 'app-listar-analisis-linea',
  imports: [TableModule, Panel],
  templateUrl: './listar-analisis-linea.component.html',
  styleUrl: './listar-analisis-linea.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListaranalisislineaComponent {
  loading = signal(false);
  data = signal<unknown[]>([]);
}
