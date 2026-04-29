import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../config/environment';

@Injectable({ providedIn: 'root' })
export class AdminService {
  private http = inject(HttpClient);
  private apiUrl = environment.apiBaseUrl;

  /**
   * Migrado de google.script.run.obtenerDatosRadicaciones
   * TODO: Conectar con API backend real
   */
  obtenerDatosRadicaciones(): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/obtener-datos-radicaciones`, {});
  }

  /**
   * Migrado de google.script.run.listarRadicacionesAdmin
   * TODO: Conectar con API backend real
   */
  listarRadicacionesAdmin(): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/listar-radicaciones-admin`, {});
  }

  /**
   * Migrado de google.script.run.guardarMesaPerfeccionamientoAdmin
   * TODO: Conectar con API backend real
   */
  guardarMesaPerfeccionamientoAdmin(): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/guardar-mesa-perfeccionamiento-admin`, {});
  }

  /**
   * Migrado de google.script.run.guardarRadicadoAdmin
   * TODO: Conectar con API backend real
   */
  guardarRadicadoAdmin(): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/guardar-radicado-admin`, {});
  }

  /**
   * Migrado de google.script.run.procesarEnvioAProveedoresDesdeRadicacion
   * TODO: Conectar con API backend real
   */
  procesarEnvioAProveedoresDesdeRadicacion(): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/procesar-envio-a-proveedores-desde-radicacion`, {});
  }

  /**
   * Migrado de google.script.run.crearRadicadoAdmin
   * TODO: Conectar con API backend real
   */
  crearRadicadoAdmin(): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/crear-radicado-admin`, {});
  }

  /**
   * Migrado de google.script.run.llenarFormulario
   * TODO: Conectar con API backend real
   */
  llenarFormulario(): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/llenar-formulario`, {});
  }

  /**
   * Migrado de google.script.run.enviarReaperturaAdmin
   * TODO: Conectar con API backend real
   */
  enviarReaperturaAdmin(): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/enviar-reapertura-admin`, {});
  }

  /**
   * Migrado de google.script.run.enviarCasoPerfeccionamientoAdmin
   * TODO: Conectar con API backend real
   */
  enviarCasoPerfeccionamientoAdmin(): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/enviar-caso-perfeccionamiento-admin`, {});
  }

  /**
   * Migrado de google.script.run.guardarPerfeccionamientoAdmin
   * TODO: Conectar con API backend real
   */
  guardarPerfeccionamientoAdmin(): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/guardar-perfeccionamiento-admin`, {});
  }

  /**
   * Migrado de google.script.run.registrarPerfeccionamiento
   * TODO: Conectar con API backend real
   */
  registrarPerfeccionamiento(): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/registrar-perfeccionamiento`, {});
  }

  /**
   * Migrado de google.script.run.pruebaDatosperfect
   * TODO: Conectar con API backend real
   */
  pruebaDatosperfect(): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/prueba-datosperfect`, {});
  }

  /**
   * Migrado de google.script.run.obtenerResumenPerfeccionamiento
   * TODO: Conectar con API backend real
   */
  obtenerResumenPerfeccionamiento(): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/obtener-resumen-perfeccionamiento`, {});
  }

  /**
   * Migrado de google.script.run.listarResumenProveedoresAdmin
   * TODO: Conectar con API backend real
   */
  listarResumenProveedoresAdmin(): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/listar-resumen-proveedores-admin`, {});
  }

  /**
   * Migrado de google.script.run.listarAnalisisVidaAdmin
   * TODO: Conectar con API backend real
   */
  listarAnalisisVidaAdmin(): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/listar-analisis-vida-admin`, {});
  }

  /**
   * Migrado de google.script.run.confirmarEstadoAnalisisAdmin
   * TODO: Conectar con API backend real
   */
  confirmarEstadoAnalisisAdmin(): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/confirmar-estado-analisis-admin`, {});
  }

  /**
   * Migrado de google.script.run.obtenerCarpeta
   * TODO: Conectar con API backend real
   */
  obtenerCarpeta(): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/obtener-carpeta`, {});
  }

  /**
   * Migrado de google.script.run.guardarArchivos
   * TODO: Conectar con API backend real
   */
  guardarArchivos(): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/guardar-archivos`, {});
  }

  /**
   * Migrado de google.script.run.guardarDocumentosAnalisis
   * TODO: Conectar con API backend real
   */
  guardarDocumentosAnalisis(): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/guardar-documentos-analisis`, {});
  }

  /**
   * Migrado de google.script.run.listarPagosAdmin
   * TODO: Conectar con API backend real
   */
  listarPagosAdmin(): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/listar-pagos-admin`, {});
  }

  /**
   * Migrado de google.script.run.procesarOrdenesDePago
   * TODO: Conectar con API backend real
   */
  procesarOrdenesDePago(): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/procesar-ordenes-de-pago`, {});
  }

  /**
   * Migrado de google.script.run.registrarPagosEnBase
   * TODO: Conectar con API backend real
   */
  registrarPagosEnBase(): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/registrar-pagos-en-base`, {});
  }

  /**
   * Migrado de google.script.run.procesarPagos
   * TODO: Conectar con API backend real
   */
  procesarPagos(): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/procesar-pagos`, {});
  }

  /**
   * Migrado de google.script.run.mapearCobertura
   * TODO: Conectar con API backend real
   */
  mapearCobertura(): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/mapear-cobertura`, {});
  }

  /**
   * Migrado de google.script.run.procesarObjecion
   * TODO: Conectar con API backend real
   */
  procesarObjecion(): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/procesar-objecion`, {});
  }

  /**
   * Migrado de google.script.run.listarObjecionesAdmin
   * TODO: Conectar con API backend real
   */
  listarObjecionesAdmin(): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/listar-objeciones-admin`, {});
  }

  /**
   * Migrado de google.script.run.listarEnlacesAnalisisAdmin
   * TODO: Conectar con API backend real
   */
  listarEnlacesAnalisisAdmin(): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/listar-enlaces-analisis-admin`, {});
  }

  /**
   * Migrado de google.script.run.ejecutarConReintentos
   * TODO: Conectar con API backend real
   */
  ejecutarConReintentos(): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/ejecutar-con-reintentos`, {});
  }

  /**
   * Migrado de google.script.run.listarProveedoresAdmin
   * TODO: Conectar con API backend real
   */
  listarProveedoresAdmin(): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/listar-proveedores-admin`, {});
  }

  /**
   * Migrado de google.script.run.cambiarEstadoProveedorAdmin
   * TODO: Conectar con API backend real
   */
  cambiarEstadoProveedorAdmin(): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/cambiar-estado-proveedor-admin`, {});
  }

  /**
   * Migrado de google.script.run.guardarInformacionUIFA
   * TODO: Conectar con API backend real
   */
  guardarInformacionUIFA(): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/guardar-informacion-uifa`, {});
  }

  /**
   * Migrado de google.script.run.guardarInformacionTecnico
   * TODO: Conectar con API backend real
   */
  guardarInformacionTecnico(): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/guardar-informacion-tecnico`, {});
  }

  /**
   * Migrado de google.script.run.guardarInformacionMedico
   * TODO: Conectar con API backend real
   */
  guardarInformacionMedico(): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/guardar-informacion-medico`, {});
  }

  /**
   * Migrado de google.script.run.guardarInformacionInvestigador
   * TODO: Conectar con API backend real
   */
  guardarInformacionInvestigador(): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/guardar-informacion-investigador`, {});
  }

  /**
   * Migrado de google.script.run.actualizarEstado
   * TODO: Conectar con API backend real
   */
  actualizarEstado(): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/actualizar-estado`, {});
  }

  /**
   * Migrado de google.script.run.consultarLogsCasoAdmin
   * TODO: Conectar con API backend real
   */
  consultarLogsCasoAdmin(): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/consultar-logs-caso-admin`, {});
  }

  /**
   * Migrado de google.script.run.listarCasosAdmin
   * TODO: Conectar con API backend real
   */
  listarCasosAdmin(): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/listar-casos-admin`, {});
  }

  /**
   * Migrado de google.script.run.obtenerListaDePersonal
   * TODO: Conectar con API backend real
   */
  obtenerListaDePersonal(): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/obtener-lista-de-personal`, {});
  }

  /**
   * Migrado de google.script.run.listarUsuariosAdmin
   * TODO: Conectar con API backend real
   */
  listarUsuariosAdmin(): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/listar-usuarios-admin`, {});
  }

  /**
   * Migrado de google.script.run.crearUsuario
   * TODO: Conectar con API backend real
   */
  crearUsuario(): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/crear-usuario`, {});
  }

  /**
   * Migrado de google.script.run.guardarUsuarioAdmin
   * TODO: Conectar con API backend real
   */
  guardarUsuarioAdmin(): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/guardar-usuario-admin`, {});
  }

  /**
   * Migrado de google.script.run.borrarUsuarioAdmin
   * TODO: Conectar con API backend real
   */
  borrarUsuarioAdmin(): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/borrar-usuario-admin`, {});
  }

  /**
   * Migrado de google.script.run.generarReporte
   * TODO: Conectar con API backend real
   */
  generarReporte(): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/generar-reporte`, {});
  }

  /**
   * Migrado de google.script.run.guardarReportePDF
   * TODO: Conectar con API backend real
   */
  guardarReportePDF(): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/guardar-reporte-pdf`, {});
  }

  /**
   * Migrado de google.script.run.generarHtmlReporte
   * TODO: Conectar con API backend real
   */
  generarHtmlReporte(): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/generar-html-reporte`, {});
  }

  /**
   * Migrado de google.script.run.buildProvCell
   * TODO: Conectar con API backend real
   */
  buildProvCell(): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/build-prov-cell`, {});
  }

  /**
   * Migrado de google.script.run.calcularTiemposBackend
   * TODO: Conectar con API backend real
   */
  calcularTiemposBackend(): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/calcular-tiempos-backend`, {});
  }

  /**
   * Migrado de google.script.run.formatAndSort
   * TODO: Conectar con API backend real
   */
  formatAndSort(): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/format-and-sort`, {});
  }

  /**
   * Migrado de google.script.run.msToTimeBackend
   * TODO: Conectar con API backend real
   */
  msToTimeBackend(): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/ms-to-time-backend`, {});
  }

  /**
   * Migrado de google.script.run.Rol
   * TODO: Conectar con API backend real
   */
  Rol(): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/rol`, {});
  }
}
