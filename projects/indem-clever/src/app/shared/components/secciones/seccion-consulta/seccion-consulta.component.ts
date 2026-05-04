import { Component, model, output, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';

/** Sección: Consultar Data Operativa — sb-ui. */
@Component({
  selector: 'app-seccion-consulta',
  imports: [FormsModule],
  template: `
    <div class="section-card">
      <div class="section-card__header">
        <span class="section-card__title">Consultar Data Operativa</span>
      </div>
      <div class="section-card__body">
        <div class="form-grid form-grid--2col">
          <div class="sb-ui-input-container">
            <label class="sb-ui-input-label">Tipo Documento</label>
            <input class="sb-ui-input" [(ngModel)]="consultaTipoDoc" placeholder="CC, NIT, etc." />
          </div>
          <div class="sb-ui-input-container">
            <label class="sb-ui-input-label">Número Documento</label>
            <input class="sb-ui-input" [(ngModel)]="consultaNumDoc" placeholder="Número..." />
          </div>
        </div>
        <div style="margin-top: 0.75rem">
          <button class="sb-ui-button sb-ui-button--primary sb-ui-button--fill sb-ui-button--icon-left" (click)="onConsultar()">
            <i class="fa-solid fa-search"></i> Consultar
          </button>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SeccionConsultaComponent {
  consultaTipoDoc = model('');
  consultaNumDoc = model('');
  readonly consultar = output<void>();

  /** Emite evento de consulta. */
  onConsultar(): void { this.consultar.emit(); }
}
