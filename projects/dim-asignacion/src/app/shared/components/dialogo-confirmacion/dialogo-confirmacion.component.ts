import { Component, input, output, ChangeDetectionStrategy } from '@angular/core';
import { Dialog } from 'primeng/dialog';
import { BotonAccionComponent } from '../boton-accion/boton-accion.component';

/**
 * Diálogo de confirmación reutilizable.
 *
 * Muestra un mensaje con dos botones: Cancelar y Confirmar.
 * Previene acciones accidentales como aprobar o devolver.
 *
 * Uso:
 * ```html
 * <app-dialogo-confirmacion
 *   [visible]="showConfirm()"
 *   titulo="¿Aprobar este caso?"
 *   mensaje="Esta acción enviará el caso a pago. ¿Está seguro?"
 *   labelConfirmar="Sí, aprobar"
 *   severityConfirmar="success"
 *   (confirmar)="aprobar()"
 *   (cancelar)="showConfirm.set(false)" />
 * ```
 */
@Component({
  selector: 'app-dialogo-confirmacion',
  imports: [Dialog, BotonAccionComponent],
  template: `
    <p-dialog
      [header]="titulo()"
      [visible]="visible()"
      (visibleChange)="onVisibleChange($event)"
      [modal]="true"
      [closable]="true"
      [style]="{ width: '450px' }"
      (onHide)="cancelar.emit()">
      <p>{{ mensaje() }}</p>
      <ng-template #footer>
        <app-boton-accion label="Cancelar" icon="pi pi-times" severity="secondary" (accion)="cancelar.emit()" />
        <app-boton-accion [label]="labelConfirmar()" [icon]="iconConfirmar()" [severity]="severityConfirmar()" (accion)="confirmar.emit()" />
      </ng-template>
    </p-dialog>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogoConfirmacionComponent {
  visible = input(false);
  titulo = input('Confirmar acción');
  mensaje = input('¿Está seguro de realizar esta acción?');
  labelConfirmar = input('Confirmar');
  iconConfirmar = input('pi pi-check');
  severityConfirmar = input<'success' | 'danger' | 'warn' | 'info'>('success');
  readonly confirmar = output<void>();
  readonly cancelar = output<void>();

  onVisibleChange(v: boolean): void {
    if (!v) { this.cancelar.emit(); }
  }
}
