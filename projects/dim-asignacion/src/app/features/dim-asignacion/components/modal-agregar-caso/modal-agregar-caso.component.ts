import { Component, input, output, ChangeDetectionStrategy } from '@angular/core';
import { Dialog } from 'primeng/dialog';

@Component({
  selector: 'app-modal-agregar-caso',
  imports: [Dialog],
  templateUrl: './modal-agregar-caso.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalAgregarCasoComponent {
  /** Controls the visibility of the dialog. */
  visible = input(false);

  /** Emits when the dialog is closed. */
  readonly onClose = output<void>();

  /** Closes the dialog. */
  close(): void {
    this.onClose.emit();
  }
}
