import { Component, input, output, ChangeDetectionStrategy } from '@angular/core';
import { Dialog } from 'primeng/dialog';

@Component({
  selector: 'app-modal-ver-enlaces',
  imports: [Dialog],
  templateUrl: './modal-ver-enlaces.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalverenlacesComponent {
  /** Controls the visibility of the dialog. */
  visible = input(false);

  /** Emits when the dialog is closed. */
  readonly onClose = output<void>();

  /** Closes the dialog. */
  close(): void {
    this.onClose.emit();
  }
}
