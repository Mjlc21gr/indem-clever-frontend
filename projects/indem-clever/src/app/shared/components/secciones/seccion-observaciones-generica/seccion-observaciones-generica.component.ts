import { Component, input, model, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';

/**
 * Sección: Observaciones genérica — sb-ui.
 * Textarea configurable dentro de un section-card.
 */
@Component({
  selector: 'app-seccion-observaciones-generica',
  imports: [FormsModule],
  template: `
    <div class="section-card">
      <div class="section-card__header">
        <span class="section-card__title">{{ legend() }}</span>
      </div>
      <div class="section-card__body">
        <textarea
          class="sb-ui-textarea"
          [rows]="rows()"
          [placeholder]="placeholder()"
          [(ngModel)]="valor"
          style="width: 100%"></textarea>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SeccionObservacionesGenericaComponent {
  legend = input('Observaciones');
  placeholder = input('Escriba sus observaciones aquí...');
  rows = input(4);
  valor = model('');
}
