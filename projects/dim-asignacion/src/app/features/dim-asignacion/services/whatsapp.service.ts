import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../config/environment';

@Injectable({ providedIn: 'root' })
export class WhatsappService {
  private http = inject(HttpClient);
  private apiUrl = environment.apiBaseUrl;

  /**
   * Migrado de google.script.run.radicacionMesaClever
   * TODO: Conectar con API backend real
   */
  radicacionMesaClever(): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/radicacion-mesa-clever`, {});
  }
}
