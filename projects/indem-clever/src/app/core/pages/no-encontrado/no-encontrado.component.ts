import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';

/**
 * Página 404 — Ruta no encontrada.
 */
@Component({
  selector: 'app-no-encontrado',
  imports: [RouterLink],
  template: `
    <div class="error-page">
      <i class="fa-solid fa-map error-page__icon"></i>
      <h1 class="error-page__title">404 — Página no encontrada</h1>
      <p class="error-page__message">La ruta que buscas no existe o fue movida.</p>
      <button class="sb-ui-button sb-ui-button--primary sb-ui-button--fill sb-ui-button--icon-left" routerLink="/inicio">
        <i class="fa-solid fa-house"></i> Volver al inicio
      </button>
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
      color: var(--sb-ui-color-primary-base, #009056);
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
export class NoEncontradoComponent {}
