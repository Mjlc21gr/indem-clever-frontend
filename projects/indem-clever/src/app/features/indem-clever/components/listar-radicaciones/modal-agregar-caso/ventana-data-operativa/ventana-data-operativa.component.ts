import { Component, model, signal, ChangeDetectionStrategy } from '@angular/core';
import { SeccionConsultaComponent, SeccionFormularioDinamicoComponent, SeccionPanelGenericoComponent, type CampoFormulario } from '@shared';

@Component({
  selector: 'app-ventana-data-operativa',
  imports: [SeccionConsultaComponent, SeccionFormularioDinamicoComponent, SeccionPanelGenericoComponent],
  templateUrl: './ventana-data-operativa.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VentanaDataOperativaComponent {
  consultaTipoDoc = model('');
  consultaNumDoc = model('');
  showResultadosData = signal(false);

  readonly camposDatosAsegurado: CampoFormulario[] = [
    { key: 'nombreCliente', label: 'Nombre Cliente' },
    { key: 'tipoDocumentoClever', label: 'Tipo Documento' },
    { key: 'numeroDocumentoClever', label: 'Número Documento' },
    { key: 'tipoPersona', label: 'Tipo Persona' },
    { key: 'nombreEmpresaData', label: 'Nombre Empresa' },
    { key: 'estadoCliente', label: 'Estado Cliente' },
  ];

  readonly camposDemografica: CampoFormulario[] = [
    { key: 'demSexo', label: 'Sexo' },
    { key: 'demFechaNacimiento', label: 'Fecha Nacimiento' },
    { key: 'demEdad', label: 'Edad' },
    { key: 'demDireccion', label: 'Dirección' },
    { key: 'demMunicipio', label: 'Municipio' },
  ];

  valoresDatosAsegurado = signal<Record<string, string>>({});
  valoresDemografica = signal<Record<string, string>>({});

  /** Ejecuta la consulta de data operativa. */
  consultarDataOperativa(): void {
    this.showResultadosData.set(true);
  }
}
