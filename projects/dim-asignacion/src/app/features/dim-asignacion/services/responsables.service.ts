import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../config/environment';

@Injectable({ providedIn: 'root' })
export class ResponsablesService {
  private http = inject(HttpClient);
  private apiUrl = environment.apiBaseUrl;

  /**
   * Migrado de google.script.run.obtenerIndicesDeColumnas
   * TODO: Conectar con API backend real
   */
  obtenerIndicesDeColumnas(): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/obtener-indices-de-columnas`, {});
  }

  /**
   * Migrado de google.script.run.asignarCasosAUsuarios
   * TODO: Conectar con API backend real
   */
  asignarCasosAUsuarios(): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/asignar-casos-a-usuarios`, {});
  }

  /**
   * Migrado de google.script.run.asignarCasoAResponsableGeneral
   * TODO: Conectar con API backend real
   */
  asignarCasoAResponsableGeneral(): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/asignar-caso-a-responsable-general`, {});
  }

  /**
   * Migrado de google.script.run.asignarCasoAResponsableGeneralOtros
   * TODO: Conectar con API backend real
   */
  asignarCasoAResponsableGeneralOtros(): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/asignar-caso-a-responsable-general-otros`, {});
  }

  /**
   * Migrado de google.script.run.listarUsuariosPorRol
   * TODO: Conectar con API backend real
   */
  listarUsuariosPorRol(): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/listar-usuarios-por-rol`, {});
  }
}
