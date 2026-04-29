import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../config/environment';

@Injectable({ providedIn: 'root' })
export class EjecucionesautomaticasService {
  private http = inject(HttpClient);
  private apiUrl = environment.apiBaseUrl;

  /**
   * Migrado de google.script.run.controladorCorreos
   * TODO: Conectar con API backend real
   */
  controladorCorreos(): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/controlador-correos`, {});
  }

  /**
   * Migrado de google.script.run.enviarCorreoInvestigador
   * TODO: Conectar con API backend real
   */
  enviarCorreoInvestigador(): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/enviar-correo-investigador`, {});
  }

  /**
   * Migrado de google.script.run.parsearFecha
   * TODO: Conectar con API backend real
   */
  parsearFecha(): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/parsear-fecha`, {});
  }

  /**
   * Migrado de google.script.run.controladorAsignacionCasos
   * TODO: Conectar con API backend real
   */
  controladorAsignacionCasos(): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/controlador-asignacion-casos`, {});
  }

  /**
   * Migrado de google.script.run.asignarCasosAleatorioAnalistas
   * TODO: Conectar con API backend real
   */
  asignarCasosAleatorioAnalistas(): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/asignar-casos-aleatorio-analistas`, {});
  }

  /**
   * Migrado de google.script.run.verificarYAsignarCasosIncompletos
   * TODO: Conectar con API backend real
   */
  verificarYAsignarCasosIncompletos(): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/verificar-y-asignar-casos-incompletos`, {});
  }

  /**
   * Migrado de google.script.run.recalcularConteoDeCasos
   * TODO: Conectar con API backend real
   */
  recalcularConteoDeCasos(): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/recalcular-conteo-de-casos`, {});
  }
}
