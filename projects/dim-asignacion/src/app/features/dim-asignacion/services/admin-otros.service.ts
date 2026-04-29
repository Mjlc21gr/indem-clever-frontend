import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../config/environment';

@Injectable({ providedIn: 'root' })
export class AdminotrosService {
  private http = inject(HttpClient);
  private apiUrl = environment.apiBaseUrl;

  /**
   * Migrado de google.script.run.listarOtrosAdmin
   * TODO: Conectar con API backend real
   */
  listarOtrosAdmin(): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/listar-otros-admin`, {});
  }

  /**
   * Migrado de google.script.run.crearCasoOtrosAdmin
   * TODO: Conectar con API backend real
   */
  crearCasoOtrosAdmin(): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/crear-caso-otros-admin`, {});
  }

  /**
   * Migrado de google.script.run.actualizarCasoOtrosAdmin
   * TODO: Conectar con API backend real
   */
  actualizarCasoOtrosAdmin(): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/actualizar-caso-otros-admin`, {});
  }

  /**
   * Migrado de google.script.run.listarOtrosLogsAdmin
   * TODO: Conectar con API backend real
   */
  listarOtrosLogsAdmin(): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/listar-otros-logs-admin`, {});
  }
}
