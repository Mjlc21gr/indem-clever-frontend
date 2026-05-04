import { Component, input, output, ChangeDetectionStrategy } from '@angular/core';

/**
 * Diálogo de confirmación reutilizable — sb-ui.
 * Modal simple con título, mensaje y botones confirmar/cancelar.
 */
@Component({
  selector: 'app-dialogo-confirmacion',
  template: `
    @if (visible()) {
      <div class="modal-overlay" (click)="onCancel()">
        <div class="modal-container" style="max-width: 480px" (click)="$event.stopPropagation()">
          <div class="modal-header">
            <span class="modal-header__title">{{ titulo() }}</span>
            <button class="modal-header__btn" (click)="onCancel()">
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>
          <div class="modal-body">
            <p style="margin: 0; font-size: 0.875rem; color: #374151">{{ mensaje() }}</p>
          </div>
          <div class="modal-footer">
            <button class="sb-ui-button sb-ui-button--secondary" (click)="onCancel()">Cancelar</button>
            <button [class]="'sb-ui-button sb-ui-button--fill ' + confirmBtnClass()" (click)="onConfirm()">
              {{ labelConfirmar() }}
            </button>
          </div>
        </div>
      </div>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogoConfirmacionComponent {
  visible = input(false);
  titulo = input('Confirmar');
  mensaje = input('¿Está seguro de realizar esta acción?');
  labelConfirmar = input('Confirmar');
  severityConfirmar = input<'success' | 'danger' | 'warn' | 'info'>('success');

  readonly confirmar = output<void>();
  readonly cancelar = output<void>();

  /** Clase del botón de confirmación según severity. */
  confirmBtnClass = () => {
    const map: Record<string, string> = {
      success: 'sb-ui-button--primary',
      danger: 'sb-ui-button--error',
      warn: 'sb-ui-button--tertiary',
      info: 'sb-ui-button--secondary',
    };
    return map[this.severityConfirmar()] ?? 'sb-ui-button--primary';
  };

  /** Emite confirmación. */
  onConfirm(): void { this.confirmar.emit(); }

  /** Emite cancelación. */
  onCancel(): void { this.cancelar.emit(); }
}
