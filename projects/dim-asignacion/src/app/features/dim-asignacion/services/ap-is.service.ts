import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../config/environment';

@Injectable({ providedIn: 'root' })
export class ApisService {
  private http = inject(HttpClient);
  private apiUrl = environment.apiBaseUrl;

  /**
   * Migrado de google.script.run.creacionSiniestroN8N
   * TODO: Conectar con API backend real
   */
  creacionSiniestroN8N(): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/creacion-siniestro-n8-n`, {});
  }

  /**
   * Migrado de google.script.run.creacionOrdenPagoN8N
   * TODO: Conectar con API backend real
   */
  creacionOrdenPagoN8N(): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/creacion-orden-pago-n8-n`, {});
  }

  /**
   * Migrado de google.script.run.consultarDataOperativa
   * TODO: Conectar con API backend real
   */
  consultarDataOperativa(): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/consultar-data-operativa`, {});
  }
}
