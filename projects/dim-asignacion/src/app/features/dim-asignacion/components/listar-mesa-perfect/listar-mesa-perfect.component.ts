import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { TableModule } from 'primeng/table';
import { Panel } from 'primeng/panel';

@Component({
  selector: 'app-listar-mesa-perfect',
  imports: [TableModule, Panel],
  templateUrl: './listar-mesa-perfect.component.html',
  styleUrl: './listar-mesa-perfect.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListarmesaperfectComponent {
  loading = signal(false);
  data = signal<unknown[]>([]);
}
