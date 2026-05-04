import { Component, input, output, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';

/**
 * Topbar — barra superior de la aplicación.
 * Usa clases sb-ui + HTML nativo. Sin PrimeNG.
 */
@Component({
  selector: 'app-topbar',
  imports: [RouterLink],
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopbarComponent {
  /** Nombre del usuario mostrado en el avatar. */
  userName = input('Usuario');

  /** Emite cuando se hace click en el botón de toggle del sidebar. */
  readonly toggleSidebar = output<void>();

  /** Maneja el click del botón de toggle. */
  onToggleSidebar(): void {
    this.toggleSidebar.emit();
  }
}
