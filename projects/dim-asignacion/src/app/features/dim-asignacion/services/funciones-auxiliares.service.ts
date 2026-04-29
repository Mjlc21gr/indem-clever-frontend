import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../config/environment';

@Injectable({ providedIn: 'root' })
export class FuncionesauxiliaresService {
  private http = inject(HttpClient);
  private apiUrl = environment.apiBaseUrl;

  /**
   * Migrado de google.script.run.registrarAsertividadIA
   * TODO: Conectar con API backend real
   */
  registrarAsertividadIA(): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/registrar-asertividad-ia`, {});
  }

  /**
   * Migrado de google.script.run.registrarLogs
   * TODO: Conectar con API backend real
   */
  registrarLogs(): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/registrar-logs`, {});
  }

  /**
   * Migrado de google.script.run.registrarErrorLogs
   * TODO: Conectar con API backend real
   */
  registrarErrorLogs(): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/registrar-error-logs`, {});
  }

  /**
   * Migrado de google.script.run.registrarLogsOtros
   * TODO: Conectar con API backend real
   */
  registrarLogsOtros(): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/registrar-logs-otros`, {});
  }

  /**
   * Migrado de google.script.run.formatearObservacion
   * TODO: Conectar con API backend real
   */
  formatearObservacion(): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/formatear-observacion`, {});
  }

  /**
   * Migrado de google.script.run.parsearFechaSegura
   * TODO: Conectar con API backend real
   */
  parsearFechaSegura(): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/parsear-fecha-segura`, {});
  }

  /**
   * Migrado de google.script.run.parsearFechaHoraSheets
   * TODO: Conectar con API backend real
   */
  parsearFechaHoraSheets(): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/parsear-fecha-hora-sheets`, {});
  }

  /**
   * Migrado de google.script.run.formatoFechaDDMMYYHH
   * TODO: Conectar con API backend real
   */
  formatoFechaDDMMYYHH(): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/formato-fecha-ddmmyyhh`, {});
  }

  /**
   * Migrado de google.script.run.formatearFechaDDMMYYYY
   * TODO: Conectar con API backend real
   */
  formatearFechaDDMMYYYY(): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/formatear-fecha-ddmmyyyy`, {});
  }

  /**
   * Migrado de google.script.run.formatearFechaYYYYMMDD
   * TODO: Conectar con API backend real
   */
  formatearFechaYYYYMMDD(): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/formatear-fecha-yyyymmdd`, {});
  }

  /**
   * Migrado de google.script.run.validarFecha
   * TODO: Conectar con API backend real
   */
  validarFecha(): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/validar-fecha`, {});
  }

  /**
   * Migrado de google.script.run.validarNumero
   * TODO: Conectar con API backend real
   */
  validarNumero(): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/validar-numero`, {});
  }

  /**
   * Migrado de google.script.run.validarEmail
   * TODO: Conectar con API backend real
   */
  validarEmail(): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/validar-email`, {});
  }

  /**
   * Migrado de google.script.run.formatearFecha
   * TODO: Conectar con API backend real
   */
  formatearFecha(): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/formatear-fecha`, {});
  }

  /**
   * Migrado de google.script.run.formatearCOP
   * TODO: Conectar con API backend real
   */
  formatearCOP(): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/formatear-cop`, {});
  }

  /**
   * Migrado de google.script.run.formatearPorcentaje
   * TODO: Conectar con API backend real
   */
  formatearPorcentaje(): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/formatear-porcentaje`, {});
  }

  /**
   * Migrado de google.script.run.convertirFechaLarga
   * TODO: Conectar con API backend real
   */
  convertirFechaLarga(): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/convertir-fecha-larga`, {});
  }
}
