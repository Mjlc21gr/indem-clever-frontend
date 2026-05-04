import { Component, model, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';

/** Sección: Checklist de Documentos — sb-ui. */
@Component({
  selector: 'app-seccion-checklist',
  imports: [FormsModule],
  templateUrl: './seccion-checklist.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SeccionChecklistComponent {
  regCivilDefuncion = model(false);
  docIdentidadAsegurado = model(false);
  epicrisis = model(false);
  certFiscalia = model(false);
  sentenciaFecha = model(false);
  croquis = model(false);
  dictamenCapacidad = model(false);
  regCivilBeneficiarios = model(false);
  docBeneficiarios = model(false);
  formB114 = model(false);
  formB121 = model(false);
  certHospitalizacion = model(false);
  certIncapacidad = model(false);
  examenesDiagnostico = model(false);
  formB337 = model(false);
  pruebaAlcoholemia = model(false);
  reciboFactura = model(false);
  certDeuda = model(false);
}
