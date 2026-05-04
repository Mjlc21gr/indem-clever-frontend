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
    { key: 'fechaInicio', label: 'Fecha Inicio' },
    { key: 'fechaFin', label: 'Fecha Fin' },
    { key: 'dias', label: 'Días' },
    { key: 'total', label: 'Total' },
    { key: 'diasDisponibles', label: 'Días Disponibles' },
    { key: 'deducible', label: 'Deducible' },
    { key: 'valorDiario', label: 'Valor Diario' },
    { key: 'valorTotal', label: 'Valor Total' },
    { key: 'decisionIA', label: 'Decisión IA' },
  ];
  readonly camposReglasHosp: CampoFormulario[] = [
    { key: 'cucConcepto', label: 'CUC Concepto', fullWidth: true },
    { key: 'razonamientoExcepciones', label: 'Razonamiento Excepciones', type: 'textarea', rows: 2 },
    { key: 'razonamientoReticencias', label: 'Razonamiento Reticencias', type: 'textarea', rows: 2 },
  ];
  readonly camposHospAccidente: CampoFormulario[] = [
    { key: 'fechaInicio', label: 'Fecha Inicio' },
    { key: 'fechaFin', label: 'Fecha Fin' },
    { key: 'dias', label: 'Días' },
    { key: 'valorTotal', label: 'Valor Total' },
    { key: 'decisionIA', label: 'Decisión IA' },
    { key: 'decisionFinal', label: 'Decisión Final' },
  ];
  readonly camposReglasAccidente: CampoFormulario[] = [
    { key: 'cucConcepto', label: 'CUC Concepto', fullWidth: true },
    { key: 'razonamientoExcepciones', label: 'Razonamiento Excepciones', type: 'textarea', rows: 1 },
    { key: 'razonamientoReticencias', label: 'Razonamiento Reticencias', type: 'textarea', rows: 1 },
  ];
  readonly camposCirugia: CampoFormulario[] = [
    { key: 'fechaInicio', label: 'Inicio' },
    { key: 'fechaFin', label: 'Fin' },
    { key: 'dias', label: 'Días' },
    { key: 'total', label: 'Total' },
    { key: 'valorDiario', label: 'Valor Diario' },
    { key: 'valorTotal', label: 'Valor Total' },
    { key: 'decisionIA', label: 'Decisión IA' },
    { key: 'decisionFinal', label: 'Decisión Final' },
  ];
  readonly camposReglasCirugia: CampoFormulario[] = [
    { key: 'cucConcepto', label: 'CUC Concepto', fullWidth: true },
    { key: 'razonamientoExcepciones', label: 'Razonamiento Excep.', type: 'textarea', rows: 2 },
    { key: 'razonamientoReticencias', label: 'Razonamiento Retic.', type: 'textarea', rows: 2 },
  ];
  readonly camposIncapacidad: CampoFormulario[] = [
    { key: 'fechaInicio', label: 'Inicio' },
    { key: 'fechaFin', label: 'Fin' },
    { key: 'dias', label: 'Días' },
    { key: 'total', label: 'Total' },
    { key: 'diasDisponibles', label: 'Días Disponibles' },
    { key: 'valorTotal', label: 'Valor Total' },
    { key: 'coberturaIncap', label: 'Cobertura Incap.' },
    { key: 'decisionIA', label: 'Decisión IA' },
    { key: 'decisionFinal', label: 'Decisión Final' },
  ];
  readonly camposReglasIncapacidad: CampoFormulario[] = [
    { key: 'cucConcepto', label: 'CUC Concepto', fullWidth: true },
    { key: 'razonamientoExcepciones', label: 'Razonamiento Excep.', type: 'textarea', rows: 2 },
    { key: 'razonamientoReticencias', label: 'Razonamiento Retic.', type: 'textarea', rows: 2 },
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
