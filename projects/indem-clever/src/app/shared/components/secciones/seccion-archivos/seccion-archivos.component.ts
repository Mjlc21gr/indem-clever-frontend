import { Component, output, ChangeDetectionStrategy } from '@angular/core';
import { Fieldset } from 'primeng/fieldset';
import { FileUpload } from 'primeng/fileupload';

/** Sección: Adjuntar Archivos. */
@Component({
  selector: 'app-seccion-archivos',
  imports: [Fieldset, FileUpload],
  templateUrl: './seccion-archivos.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SeccionArchivosComponent {
  /** Emits when files are selected. */
  readonly filesSelected = output<{ files: File[] }>();

  /** Handles file selection. */
  onFileSelect(event: { files: File[] }): void {
    this.filesSelected.emit(event);
  }
}
