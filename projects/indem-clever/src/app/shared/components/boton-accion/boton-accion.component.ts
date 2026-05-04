import { Component, input, output, ChangeDetectionStrategy } from '@angular/core';

/**
 * Botón de acción reutilizable — sb-ui.
 * Reemplaza el wrapper de PrimeNG Button.
 */
@Component({
  selector: 'app-boton-accion',
  template: `
    <button
      [class]="btnClass()"
      [disabled]="disabled()"
      (click)="accion.emit()">
      @if (icon()) { <i [class]="icon()"></i> }
      {{ label() }}
    </button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BotonAccionComponent {
  label = input('');
  icon = input('');
  severity = input<'success' | 'secondary' | 'info' | 'warn' | 'danger' | 'contrast'>('secondary');
  outlined = input(false);
  disabled = input(false);
  readonly accion = output<void>();

  /** Genera las clases sb-ui-button según el severity. */
  btnClass = () => {
    const base = 'sb-ui-button';
    const map: Record<string, string> = {
      success: 'sb-ui-button--primary sb-ui-button--fill',
      info: 'sb-ui-button--secondary sb-ui-button--fill',
      secondary: 'sb-ui-button--secondary',
      warn: 'sb-ui-button--tertiary sb-ui-button--fill',
      danger: 'sb-ui-button--error sb-ui-button--fill',
      contrast: 'sb-ui-button--secondary',
    };
    const variant = map[this.severity()] ?? 'sb-ui-button--secondary';
    const outline = this.outlined() ? '' : '';
    const iconMod = this.icon() && this.label() ? 'sb-ui-button--icon-left' : this.icon() && !this.label() ? 'sb-ui-button--icon-only' : '';
    return `${base} ${variant} ${iconMod}`.trim();
  };
}
