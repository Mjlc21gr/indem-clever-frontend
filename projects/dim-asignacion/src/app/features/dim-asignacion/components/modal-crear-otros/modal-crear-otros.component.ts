import { Component, input, output, ChangeDetectionStrategy } from '@angular/core';
import { Dialog } from 'primeng/dialog';

@Component({
  selector: 'app-modal-crear-otros',
  imports: [Dialog],
  templateUrl: './modal-crear-otros.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalcrearotrosComponent {
  /** Controls the visibility of the dialog. */
  visible = input(false);

  /** Emits when the dialog is closed. */
  readonly onClose = output<void>();

  /** Closes the dialog. */
  close(): void {
    this.onClose.emit();
  }
}
