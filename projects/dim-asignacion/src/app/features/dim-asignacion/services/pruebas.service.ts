import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../config/environment';

@Injectable({ providedIn: 'root' })
export class PruebasService {
  private http = inject(HttpClient);
  private apiUrl = environment.apiBaseUrl;

  /**
   * Migrado de google.script.run.pruebaParsearSeguro
   * TODO: Conectar con API backend real
   */
  pruebaParsearSeguro(): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/prueba-parsear-seguro`, {});
  }

  /**
   * Migrado de google.script.run.pruebaDatos
   * TODO: Conectar con API backend real
   */
  pruebaDatos(): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/prueba-datos`, {});
  }

  /**
   * Migrado de google.script.run.pruebaIDRadicado
   * TODO: Conectar con API backend real
   */
  pruebaIDRadicado(): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/prueba-id-radicado`, {});
  }

  /**
   * Migrado de google.script.run.pruebaIDPerf
   * TODO: Conectar con API backend real
   */
  pruebaIDPerf(): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/prueba-id-perf`, {});
  }

  /**
   * Migrado de google.script.run.pruebaTodosRadicados
   * TODO: Conectar con API backend real
   */
  pruebaTodosRadicados(): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/prueba-todos-radicados`, {});
  }

  /**
   * Migrado de google.script.run.pruebaN8NSiniestro
   * TODO: Conectar con API backend real
   */
  pruebaN8NSiniestro(): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/prueba-n8-n-siniestro`, {});
  }

  /**
   * Migrado de google.script.run.pruebaN8NOrdenPago
   * TODO: Conectar con API backend real
   */
  pruebaN8NOrdenPago(): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/prueba-n8-n-orden-pago`, {});
  }

  /**
   * Migrado de google.script.run.pruebaResumenProveedores
   * TODO: Conectar con API backend real
   */
  pruebaResumenProveedores(): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/prueba-resumen-proveedores`, {});
  }

  /**
   * Migrado de google.script.run.pruebaAsignacionCasosHermanos
   * TODO: Conectar con API backend real
   */
  pruebaAsignacionCasosHermanos(): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/prueba-asignacion-casos-hermanos`, {});
  }

  /**
   * Migrado de google.script.run.pruebaN8NDataOperativa
   * TODO: Conectar con API backend real
   */
  pruebaN8NDataOperativa(): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/prueba-n8-n-data-operativa`, {});
  }

  /**
   * Migrado de google.script.run.pruebaIDLink
   * TODO: Conectar con API backend real
   */
  pruebaIDLink(): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/prueba-id-link`, {});
  }

  /**
   * Migrado de google.script.run.pruebaIDLogs
   * TODO: Conectar con API backend real
   */
  pruebaIDLogs(): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/prueba-id-logs`, {});
  }

  /**
   * Migrado de google.script.run.probarConvertirFechaLarga
   * TODO: Conectar con API backend real
   */
  probarConvertirFechaLarga(): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/probar-convertir-fecha-larga`, {});
  }

  /**
   * Migrado de google.script.run.probarListarProveedores
   * TODO: Conectar con API backend real
   */
  probarListarProveedores(): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/probar-listar-proveedores`, {});
  }

  /**
   * Migrado de google.script.run.probarParametrizar
   * TODO: Conectar con API backend real
   */
  probarParametrizar(): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/probar-parametrizar`, {});
  }

  /**
   * Migrado de google.script.run.pruebaObtenerCarpeta
   * TODO: Conectar con API backend real
   */
  pruebaObtenerCarpeta(): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/prueba-obtener-carpeta`, {});
  }

  /**
   * Migrado de google.script.run.pruebaIDUsuario
   * TODO: Conectar con API backend real
   */
  pruebaIDUsuario(): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/prueba-id-usuario`, {});
  }

  /**
   * Migrado de google.script.run.pruebaListarOtrosID
   * TODO: Conectar con API backend real
   */
  pruebaListarOtrosID(): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/prueba-listar-otros-id`, {});
  }

  /**
   * Migrado de google.script.run.pruebaAsignarProveedoresEspecifico
   * TODO: Conectar con API backend real
   */
  pruebaAsignarProveedoresEspecifico(): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/prueba-asignar-proveedores-especifico`, {});
  }

  /**
   * Migrado de google.script.run.pruebaReporteria
   * TODO: Conectar con API backend real
   */
  pruebaReporteria(): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/prueba-reporteria`, {});
  }

  /**
   * Migrado de google.script.run.pruebaReporteriaArchivo
   * TODO: Conectar con API backend real
   */
  pruebaReporteriaArchivo(): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/prueba-reporteria-archivo`, {});
  }

  /**
   * Migrado de google.script.run.pruebaCrearUsuario
   * TODO: Conectar con API backend real
   */
  pruebaCrearUsuario(): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/prueba-crear-usuario`, {});
  }
}
