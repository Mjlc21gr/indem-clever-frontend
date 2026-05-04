import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '../../../environments/environment';
import type { ApiResponse, PaginatedData, RadicacionResumen } from '../models';

/**
 * Parámetros de consulta para listar radicaciones.
 */
export interface RadicacionesQueryParams {
  estado: string;
  page: number;
  size: number;
}

/**
 * Servicio de radicaciones.
 *
 * Consume el endpoint GET /radicaciones del backend de siniestros.
 * Retorna datos paginados con metadata de paginación.
 */
@Injectable({ providedIn: 'root' })
export class RadicacionesService {
  private http = inject(HttpClient);
  private readonly baseUrl = `${environment.apiUrl}/radicaciones`;

  /**
   * Consulta radicaciones paginadas filtradas por estado.
   * @param params - Parámetros de consulta (estado, page, size).
   * @returns Observable con los datos paginados de radicaciones.
   */
  listar(params: RadicacionesQueryParams): Observable<PaginatedData<RadicacionResumen>> {
    const httpParams = new HttpParams()
      .set('estado', params.estado)
      .set('page', params.page.toString())
      .set('size', params.size.toString());

    return this.http
      .get<ApiResponse<PaginatedData<RadicacionResumen>>>(this.baseUrl, { params: httpParams })
      .pipe(map(response => response.data));
  }
}
