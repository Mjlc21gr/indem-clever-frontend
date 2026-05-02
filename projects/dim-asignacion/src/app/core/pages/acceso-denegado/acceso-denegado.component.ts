import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Button } from 'primeng/button';

/**
 * Página de acceso denegado (403).
 * Se muestra cuando el usuario no tiene el rol requerido.
 */
@Component({
  selector: 'app-acceso-denegado',
  imports: [RouterLink, Button],
  template: `
    <div class="error-page">
      <i class="pi pi-lock error-page__icon error-page__icon--warn"></i>
      <h1 class="error-page__title">Acceso Denegado</h1>
      <p class="error-page__message">No tiene permisos para acceder a esta sección.</p>
      <p-button label="Volver al inicio" icon="pi pi-home" routerLink="/inicio" />
    </div>
  `,
  styles: [`
    .error-page {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 60vh;
      text-align: center;
      gap: 0.75rem;
    }
    .error-page__icon {
      font-size: 4rem;
      color: #0a6e45;
      &--warn { color: #f2c010; }
    }
    .error-page__title {
      font-size: 1.5rem;
      font-weight: 700;
      color: #1f2937;
      margin: 0;
    }
    .error-page__message {
      font-size: 0.9375rem;
      color: #6b7280;
      margin: 0;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccesoDenegadoComponent {}
