import { Component, model, signal, ChangeDetectionStrategy } from '@angular/core';
import { Divider } from 'primeng/divider';
import { Panel } from 'primeng/panel';
import { SeccionConsultaComponent } from './secciones/seccion-consulta/seccion-consulta.component';
import { SeccionDatosAseguradoComponent } from './secciones/seccion-datos-asegurado/seccion-datos-asegurado.component';
import { SeccionDemograficaComponent } from './secciones/seccion-demografica/seccion-demografica.component';

/** Ventana: Data Operativa (Tab 1 del modal Agregar Caso). */
@Component({
  selector: 'app-ventana-data-operativa',
  imports: [
    Divider,
    Panel,
    SeccionConsultaComponent,
    SeccionDatosAseguradoComponent,
    SeccionDemograficaComponent,
  ],
  templateUrl: './ventana-data-operativa.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VentanaDataOperativaComponent {
  /* Consulta */
  consultaTipoDoc = model('');
  consultaNumDoc = model('');

  /* Datos Asegurado */
  nombreCliente = model('');
  tipoDocumentoClever = model('');
  numeroDocumentoClever = model('');
  tipoPersona = model('');
  nombreEmpresaData = model('');
  estadoCliente = model('');

  /* Demográfica */
  demSexo = model('');
  demFechaNacimiento = model('');
  demEdad = model('');
  demDireccion = model('');
  demMunicipio = model('');

  /** Controls visibility of results after consultation. */
  showResultadosData = signal(false);

  /** Handles consultation trigger from seccion-consulta. */
  consultarDataOperativa(): void {
    this.showResultadosData.set(true);
    // TODO: call service
  }
}
