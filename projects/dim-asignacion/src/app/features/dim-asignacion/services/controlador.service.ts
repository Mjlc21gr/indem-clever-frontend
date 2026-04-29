import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../config/environment';

@Injectable({ providedIn: 'root' })
export class ControladorService {
  private http = inject(HttpClient);
  private apiUrl = environment.apiBaseUrl;

  /**
   * Migrado de google.script.run.doGet
   * TODO: Conectar con API backend real
   */
  doGet(): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/do-get`, {});
  }

  /**
   * Migrado de google.script.run.incluirArchivo
   * TODO: Conectar con API backend real
   */
  incluirArchivo(): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/incluir-archivo`, {});
  }

  /**
   * Migrado de google.script.run.controlador
   * TODO: Conectar con API backend real
   */
  controlador(): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/controlador`, {});
  }
}
