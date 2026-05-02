import { Component, model, signal, ChangeDetectionStrategy } from '@angular/core';
import { Divider } from 'primeng/divider';
import { SeccionConsultaComponent, SeccionFormularioDinamicoComponent, SeccionPanelGenericoComponent, type CampoFormulario } from '@shared';

@Component({
  selector: 'app-ventana-data-operativa',
  imports: [Divider, SeccionConsultaComponent, SeccionFormularioDinamicoComponent, SeccionPanelGenericoComponent],
  templateUrl: './ventana-data-operativa.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VentanaDataOperativaComponent {
  consultaTipoDoc = model('');
  consultaNumDoc = model('');
  showResultadosData = signal(false);

  readonly camposDatosAsegurado: CampoFormulario[] = [
    { key: 'nombreCliente', label: 'Nombre Cliente', readonly: true },
    { key: 'tipoDocumentoClever', label: 'Tipo Documento', readonly: true },
    { key: 'numeroDocumentoClever', label: 'Número Documento', readonly: true },
    { key: 'tipoPersona', label: 'Tipo Persona', readonly: true },
    { key: 'nombreEmpresaData', label: 'Nombre Empresa', readonly: true },
    { key: 'estadoCliente', label: 'Estado Cliente', readonly: true },
  ];

  readonly camposDemografica: CampoFormulario[] = [
    { key: 'demSexo', label: 'Sexo', readonly: true },
    { key: 'demFechaNacimiento', label: 'Fecha Nacimiento', readonly: true },
    { key: 'demEdad', label: 'Edad', readonly: true },
    { key: 'demDireccion', label: 'Dirección', readonly: true },
    { key: 'demMunicipio', label: 'Municipio', readonly: true },
  ];

  valoresDatosAsegurado = signal<Record<string, string>>({});
  valoresDemografica = signal<Record<string, string>>({});

  consultarDataOperativa(): void {
    this.showResultadosData.set(true);
  }
}
