import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../config/environment';

@Injectable({ providedIn: 'root' })
export class GeneracioncartasService {
  private http = inject(HttpClient);
  private apiUrl = environment.apiBaseUrl;

  /**
   * Migrado de google.script.run.generarDocumentoRentech
   * TODO: Conectar con API backend real
   */
  generarDocumentoRentech(): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/generar-documento-rentech`, {});
  }

  /**
   * Migrado de google.script.run.generarDocumentoRentechAdmin
   * TODO: Conectar con API backend real
   */
  generarDocumentoRentechAdmin(): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/generar-documento-rentech-admin`, {});
  }

  /**
   * Migrado de google.script.run.reemplazarTextoPlantillaObjeciones
   * TODO: Conectar con API backend real
   */
  reemplazarTextoPlantillaObjeciones(): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/reemplazar-texto-plantilla-objeciones`, {});
  }

  /**
   * Migrado de google.script.run.generarCartaObjecion
   * TODO: Conectar con API backend real
   */
  generarCartaObjecion(): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/generar-carta-objecion`, {});
  }

  /**
   * Migrado de google.script.run.reemplazarTextoPlantillaPagos
   * TODO: Conectar con API backend real
   */
  reemplazarTextoPlantillaPagos(): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/reemplazar-texto-plantilla-pagos`, {});
  }

  /**
   * Migrado de google.script.run.generarCartaPago
   * TODO: Conectar con API backend real
   */
  generarCartaPago(): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/generar-carta-pago`, {});
  }

  /**
   * Migrado de google.script.run.construirFormCartaDesdeFila
   * TODO: Conectar con API backend real
   */
  construirFormCartaDesdeFila(): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/construir-form-carta-desde-fila`, {});
  }
}
