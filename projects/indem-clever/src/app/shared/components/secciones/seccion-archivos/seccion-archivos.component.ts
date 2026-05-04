import { Component, output, ChangeDetectionStrategy } from '@angular/core';

/**
 * Sección: Adjuntar Archivos — sb-ui.
 * Usa sb-ui-file-upload para subir archivos.
 */
@Component({
  selector: 'app-seccion-archivos',
  template: `
    <div class="section-card">
      <div class="section-card__header">
        <span class="section-card__title">Adjuntar Archivos</span>
      </div>
      <div class="section-card__body">
        <div class="sb-ui-file-upload">
          <input type="file" multiple accept="application/pdf,image/*" (change)="onFileChange($event)" />
          <div class="sb-ui-file-upload__content">
            <i class="fa-solid fa-cloud-arrow-up" style="font-size: 1.5rem; color: #9ca3af"></i>
            <span style="font-size: 0.8125rem; color: #6b7280">Arrastra archivos aquí o haz click para seleccionar</span>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .sb-ui-file-upload {
      position: relative;
      border: 2px dashed #e1e1e1;
      border-radius: 8px;
      padding: 2rem;
      text-align: center;
      transition: border-color 0.2s;
      &:hover { border-color: var(--sb-ui-color-primary-base, #009056); }
      input[type="file"] { position: absolute; inset: 0; opacity: 0; cursor: pointer; }
    }
    .sb-ui-file-upload__content { display: flex; flex-direction: column; align-items: center; gap: 0.5rem; }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SeccionArchivosComponent {
  readonly filesSelected = output<{ files: File[] }>();

  /** Maneja la selección de archivos. */
  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      this.filesSelected.emit({ files: Array.from(input.files) });
    }
  }
}
