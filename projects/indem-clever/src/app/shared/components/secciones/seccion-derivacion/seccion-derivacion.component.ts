import { Component, model, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';

/** Sección: Envío y Derivación del Caso — sb-ui. */
@Component({
  selector: 'app-seccion-derivacion',
  imports: [FormsModule],
  templateUrl: './seccion-derivacion.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SeccionDerivacionComponent {
  enviarProveedores = model('no');
  enviarLineaNegocio = model(false);
  proveedorInvestigador = model(false);
  proveedorUIFA = model(false);
  proveedorTecnico = model(false);
  agenteInvestigadorRadi = model('');
  motivoMovilizacionInvestigador = model('');
  motivoMovilizacionUIFA = model('');
  agenteTecnicoRadi = model('');
  motivoMovilizacionTecnico = model('');
  agentesInvestigador = model<{ label: string; value: string }[]>([]);
  agentesTecnico = model<{ label: string; value: string }[]>([]);

  readonly tiposInvestigacion = [
    { label: 'Seleccionar', value: '' },
    { label: 'Verificación', value: 'Verificación' },
    { label: 'Informe Completo', value: 'Informe Completo' },
    { label: 'Fraude', value: 'Fraude' },
  ];
}
