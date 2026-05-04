import { Component, input, output, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';

/** Definición de un campo del formulario dinámico. */
export interface CampoFormulario {
  key: string;
  label: string;
  type?: 'text' | 'textarea' | 'email' | 'tel' | 'date' | 'number';
  readonly?: boolean;
  rows?: number;
  fullWidth?: boolean;
}

/**
 * Sección: Formulario Dinámico — sb-ui.
 * Recibe un array de campos y renderiza un formulario con grid responsive.
 */
@Component({
  selector: 'app-seccion-formulario-dinamico',
  imports: [FormsModule],
  templateUrl: './seccion-formulario-dinamico.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SeccionFormularioDinamicoComponent {
  legend = input('');
  toggleable = input(true);
  campos = input<CampoFormulario[]>([]);
  valores = input<Record<string, string>>({});
  readonly valoresChange = output<Record<string, string>>();

  collapsed = false;

  /** Toggle la sección. */
  toggle(): void {
    if (this.toggleable()) this.collapsed = !this.collapsed;
  }

  getValor(key: string): string { return this.valores()[key] ?? ''; }

  setValor(key: string, value: string): void {
    this.valoresChange.emit({ ...this.valores(), [key]: value });
  }

  camposGrid(): CampoFormulario[] { return this.campos().filter(c => !c.fullWidth); }
  camposFull(): CampoFormulario[] { return this.campos().filter(c => c.fullWidth); }
}
