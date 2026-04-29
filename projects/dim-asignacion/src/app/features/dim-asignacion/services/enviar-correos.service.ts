import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../config/environment';

@Injectable({ providedIn: 'root' })
export class EnviarcorreosService {
  private http = inject(HttpClient);
  private apiUrl = environment.apiBaseUrl;

  /**
   * Migrado de google.script.run.obtenerArchivosDelCaso
   * TODO: Conectar con API backend real
   */
  obtenerArchivosDelCaso(): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/obtener-archivos-del-caso`, {});
  }

  /**
   * Migrado de google.script.run.enviarCorreoControlador
   * TODO: Conectar con API backend real
   */
  enviarCorreoControlador(): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/enviar-correo-controlador`, {});
  }
}
