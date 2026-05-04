import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SeccionFormularioDinamicoComponent } from '../seccion-formulario-dinamico/seccion-formulario-dinamico.component';
import { SeccionObservacionesGenericaComponent } from '../seccion-observaciones-generica/seccion-observaciones-generica.component';
import type { CampoFormulario } from '../seccion-formulario-dinamico/seccion-formulario-dinamico.component';

/** Sección: Análisis de la IA — sb-ui. */
@Component({
  selector: 'app-seccion-analisis-ia',
  imports: [FormsModule, SeccionFormularioDinamicoComponent, SeccionObservacionesGenericaComponent],
  templateUrl: './seccion-analisis-ia.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SeccionAnalisisIaComponent {
  collapsed = false;

  readonly camposHospGeneral: CampoFormulario[] = [
    { key: 'fechaInicio', label: 'Fecha Inicio', readonly: true },
    { key: 'fechaFin', label: 'Fecha Fin', readonly: true },
    { key: 'dias', label: 'Días', readonly: true },
    { key: 'total', label: 'Total', readonly: true },
    { key: 'diasDisponibles', label: 'Días Disponibles', readonly: true },
    { key: 'deducible', label: 'Deducible', readonly: true },
    { key: 'valorDiario', label: 'Valor Diario', readonly: true },
    { key: 'valorTotal', label: 'Valor Total', readonly: true },
    { key: 'decisionIA', label: 'Decisión IA', readonly: true },
  ];
  readonly camposReglasHosp: CampoFormulario[] = [
    { key: 'cucConcepto', label: 'CUC Concepto', readonly: true, fullWidth: true },
    { key: 'razonamientoExcepciones', label: 'Razonamiento Excepciones', type: 'textarea', rows: 2, readonly: true },
    { key: 'razonamientoReticencias', label: 'Razonamiento Reticencias', type: 'textarea', rows: 2, readonly: true },
  ];
  readonly camposHospAccidente: CampoFormulario[] = [
    { key: 'fechaInicio', label: 'Fecha Inicio', readonly: true },
    { key: 'fechaFin', label: 'Fecha Fin', readonly: true },
    { key: 'dias', label: 'Días', readonly: true },
    { key: 'valorTotal', label: 'Valor Total', readonly: true },
    { key: 'decisionIA', label: 'Decisión IA', readonly: true },
    { key: 'decisionFinal', label: 'Decisión Final', readonly: true },
  ];
  readonly camposReglasAccidente: CampoFormulario[] = [
    { key: 'cucConcepto', label: 'CUC Concepto', readonly: true, fullWidth: true },
    { key: 'razonamientoExcepciones', label: 'Razonamiento Excepciones', type: 'textarea', rows: 1, readonly: true },
    { key: 'razonamientoReticencias', label: 'Razonamiento Reticencias', type: 'textarea', rows: 1, readonly: true },
  ];
  readonly camposCirugia: CampoFormulario[] = [
    { key: 'fechaInicio', label: 'Inicio', readonly: true },
    { key: 'fechaFin', label: 'Fin', readonly: true },
    { key: 'dias', label: 'Días', readonly: true },
    { key: 'total', label: 'Total', readonly: true },
    { key: 'valorDiario', label: 'Valor Diario', readonly: true },
    { key: 'valorTotal', label: 'Valor Total', readonly: true },
    { key: 'decisionIA', label: 'Decisión IA', readonly: true },
    { key: 'decisionFinal', label: 'Decisión Final', readonly: true },
  ];
  readonly camposReglasCirugia: CampoFormulario[] = [
    { key: 'cucConcepto', label: 'CUC Concepto', readonly: true, fullWidth: true },
    { key: 'razonamientoExcepciones', label: 'Razonamiento Excep.', type: 'textarea', rows: 2, readonly: true },
    { key: 'razonamientoReticencias', label: 'Razonamiento Retic.', type: 'textarea', rows: 2, readonly: true },
  ];
  readonly camposIncapacidad: CampoFormulario[] = [
    { key: 'fechaInicio', label: 'Inicio', readonly: true },
    { key: 'fechaFin', label: 'Fin', readonly: true },
    { key: 'dias', label: 'Días', readonly: true },
    { key: 'total', label: 'Total', readonly: true },
    { key: 'diasDisponibles', label: 'Días Disponibles', readonly: true },
    { key: 'valorTotal', label: 'Valor Total', readonly: true },
    { key: 'coberturaIncap', label: 'Cobertura Incap.', readonly: true },
    { key: 'decisionIA', label: 'Decisión IA', readonly: true },
    { key: 'decisionFinal', label: 'Decisión Final', readonly: true },
  ];
  readonly camposReglasIncapacidad: CampoFormulario[] = [
    { key: 'cucConcepto', label: 'CUC Concepto', readonly: true, fullWidth: true },
    { key: 'razonamientoExcepciones', label: 'Razonamiento Excep.', type: 'textarea', rows: 2, readonly: true },
    { key: 'razonamientoReticencias', label: 'Razonamiento Retic.', type: 'textarea', rows: 2, readonly: true },
  ];

  valoresHospGeneral = signal<Record<string, string>>({});
  valoresReglasHosp = signal<Record<string, string>>({});
  valoresHospAccidente = signal<Record<string, string>>({});
  valoresReglasAccidente = signal<Record<string, string>>({});
  valoresCirugia = signal<Record<string, string>>({});
  valoresReglasCirugia = signal<Record<string, string>>({});
  valoresIncapacidad = signal<Record<string, string>>({});
  valoresReglasIncapacidad = signal<Record<string, string>>({});
  asertividadIA = '';
  observacionesIA = signal('');

  /** Toggle la sección principal. */
  toggle(): void { this.collapsed = !this.collapsed; }
}
