import { Component, model, signal, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Textarea } from 'primeng/textarea';
import { Select } from 'primeng/select';
import { Fieldset } from 'primeng/fieldset';
import { Fluid } from 'primeng/fluid';
import { Checkbox } from 'primeng/checkbox';
import { RadioButton } from 'primeng/radiobutton';
import { Message } from 'primeng/message';
import { Divider } from 'primeng/divider';

/** Sección: Envío y Derivación del Caso. */
@Component({
  selector: 'app-seccion-derivacion',
  imports: [
    FormsModule, Textarea, Select, Fieldset, Fluid,
    Checkbox, RadioButton, Message, Divider,
  ],
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

  /** Investigation type options. */
  readonly tiposInvestigacion = [
    { label: 'Seleccionar', value: '' },
    { label: 'Verificación', value: 'Verificación' },
    { label: 'Informe Completo', value: 'Informe Completo' },
    { label: 'Fraude', value: 'Fraude' },
  ];
}
