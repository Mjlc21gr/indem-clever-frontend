import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { TableModule } from 'primeng/table';
import { Panel } from 'primeng/panel';

@Component({
  selector: 'app-listar-usuarios',
  imports: [TableModule, Panel],
  templateUrl: './listar-usuarios.component.html',
  styleUrl: './listar-usuarios.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListarusuariosComponent {
  loading = signal(false);
  data = signal<unknown[]>([]);
}
