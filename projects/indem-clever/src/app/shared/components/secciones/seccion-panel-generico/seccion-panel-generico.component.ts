import { Component, input, ChangeDetectionStrategy } from '@angular/core';

/**
 * Sección: Panel Genérico colapsable — sb-ui.
 * Muestra un header con toggle y un mensaje vacío.
 */
@Component({
  selector: 'app-seccion-panel-generico',
  template: `
    <div class="section-card">
      <div class="section-card__header" (click)="toggle()">
        <span class="section-card__title">{{ header() }}</span>
        <i class="fa-solid fa-chevron-down section-card__toggle" [class.section-card__toggle--collapsed]="isCollapsed"></i>
      </div>
      @if (!isCollapsed) {
        <div class="section-card__body">
          <p class="text-muted">{{ emptyMessage() }}</p>
        </div>
      }
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SeccionPanelGenericoComponent {
  header = input('');
  emptyMessage = input('Sin datos registrados.');
  toggleable = input(true);
  collapsed = input(true);

  isCollapsed = true;

  /** Inicializa el estado de colapso. */
  ngOnInit(): void { this.isCollapsed = this.collapsed(); }

  /** Toggle la sección. */
  toggle(): void { if (this.toggleable()) this.isCollapsed = !this.isCollapsed; }
}
