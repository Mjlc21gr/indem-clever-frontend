import { Component, input, output, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputText } from 'primeng/inputtext';
import { Textarea } from 'primeng/textarea';
import { Fieldset } from 'primeng/fieldset';
import { Fluid } from 'primeng/fluid';

export interface CampoFormulario {
  key: string;
  label: string;
  type?: 'text' | 'textarea' | 'email' | 'tel' | 'date' | 'number';
  readonly?: boolean;
  rows?: number;
  fullWidth?: boolean;
}

@Component({
  selector: 'app-seccion-formulario-dinamico',
  imports: [FormsModule, InputText, Textarea, Fieldset, Fluid],
  templateUrl: './seccion-formulario-dinamico.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SeccionFormularioDinamicoComponent {
  legend = input('');
  toggleable = input(true);
  campos = input<CampoFormulario[]>([]);
  valores = input<Record<string, string>>({});
  readonly valoresChange = output<Record<string, string>>();

  getValor(key: string): string {
    return this.valores()[key] ?? '';
  }

  setValor(key: string, value: string): void {
    const updated = { ...this.valores(), [key]: value };
    this.valoresChange.emit(updated);
  }

  camposGrid(): CampoFormulario[] {
    return this.campos().filter(c => !c.fullWidth);
  }

  camposFull(): CampoFormulario[] {
    return this.campos().filter(c => c.fullWidth);
  }
}
