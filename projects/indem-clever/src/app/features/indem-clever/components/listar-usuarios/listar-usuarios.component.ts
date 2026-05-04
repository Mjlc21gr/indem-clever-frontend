import { Component, signal, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-listar-usuarios',
  imports: [],
  templateUrl: './listar-usuarios.component.html',
  styleUrl: './listar-usuarios.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListarusuariosComponent {
  loading = signal(false);
  data = signal<unknown[]>([]);
}
