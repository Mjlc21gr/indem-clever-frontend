import { Injectable, signal } from '@angular/core';

/** Tipo de notificación. */
export type TipoNotificacion = 'success' | 'error' | 'warning' | 'info';

/** Notificación individual. */
export interface Notificacion {
  id: number;
  tipo: TipoNotificacion;
  titulo: string;
  detalle: string;
}

/**
 * Servicio de notificaciones (toasts).
 * Usa sb-ui-alert para mostrar mensajes.
 * Los componentes que necesiten mostrar toasts inyectan este servicio.
 */
@Injectable({ providedIn: 'root' })
export class NotificacionService {
  private _counter = 0;
  readonly notificaciones = signal<Notificacion[]>([]);

  /** Muestra un toast de éxito. */
  exito(detalle: string, titulo: string = 'Éxito'): void {
    this._add('success', titulo, detalle);
  }

  /** Muestra un toast de error. */
  error(detalle: string, titulo: string = 'Error'): void {
    this._add('error', titulo, detalle);
  }

  /** Muestra un toast de advertencia. */
  advertencia(detalle: string, titulo: string = 'Atención'): void {
    this._add('warning', titulo, detalle);
  }

  /** Muestra un toast informativo. */
  info(detalle: string, titulo: string = 'Información'): void {
    this._add('info', titulo, detalle);
  }

  /** Elimina una notificación por ID. */
  dismiss(id: number): void {
    this.notificaciones.update(list => list.filter(n => n.id !== id));
  }

  /** Agrega una notificación y la auto-elimina después de un tiempo. */
  private _add(tipo: TipoNotificacion, titulo: string, detalle: string): void {
    const id = ++this._counter;
    const life = tipo === 'error' ? 6000 : 4000;
    this.notificaciones.update(list => [...list, { id, tipo, titulo, detalle }]);
    setTimeout(() => this.dismiss(id), life);
  }
}
