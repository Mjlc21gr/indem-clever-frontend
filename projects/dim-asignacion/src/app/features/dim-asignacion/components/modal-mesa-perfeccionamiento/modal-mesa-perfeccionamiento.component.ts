import { Component, input, output, ChangeDetectionStrategy } from '@angular/core';
import { Dialog } from 'primeng/dialog';

@Component({
  selector: 'app-modal-mesa-perfeccionamiento',
  imports: [Dialog],
  templateUrl: './modal-mesa-perfeccionamiento.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalMesaPerfeccionamientoComponent {
  /** Controls the visibility of the dialog. */
  visible = input(false);

  /** Emits when the dialog is closed. */
  readonly onClose = output<void>();

  /** Closes the dialog. */
  close(): void {
    this.onClose.emit();
  }
}
