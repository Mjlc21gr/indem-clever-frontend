import { Component, input, output, ChangeDetectionStrategy } from '@angular/core';
import { Button } from 'primeng/button';

@Component({
  selector: 'app-boton-accion',
  imports: [Button],
  template: `
    <p-button
      [label]="label()"
      [icon]="icon()"
      [severity]="severity()"
      [outlined]="outlined()"
      (onClick)="accion.emit()" />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BotonAccionComponent {
  label = input('');
  icon = input('');
  severity = input<'success' | 'secondary' | 'info' | 'warn' | 'danger' | 'contrast'>('secondary');
  outlined = input(false);
  readonly accion = output<void>();
}
