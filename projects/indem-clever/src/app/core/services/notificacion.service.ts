import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

/**
 * Servicio de notificaciones (toasts).
 *
 * Centraliza los mensajes de feedback al usuario.
 * Usa PrimeNG Toast internamente.
 * Requiere que `<p-toast />` esté en el app.html.
 */
@Injectable({ providedIn: 'root' })
export class NotificacionService {
  constructor(private readonly messageService: MessageService) {}

  /** Muestra un toast de éxito. */
  exito(detalle: string, titulo: string = 'Éxito'): void {
    this.messageService.add({ severity: 'success', summary: titulo, detail: detalle, life: 4000 });
  }

  /** Muestra un toast de error. */
  error(detalle: string, titulo: string = 'Error'): void {
    this.messageService.add({ severity: 'error', summary: titulo, detail: detalle, life: 6000 });
  }

  /** Muestra un toast de advertencia. */
  advertencia(detalle: string, titulo: string = 'Atención'): void {
    this.messageService.add({ severity: 'warn', summary: titulo, detail: detalle, life: 5000 });
  }

  /** Muestra un toast informativo. */
  info(detalle: string, titulo: string = 'Información'): void {
    this.messageService.add({ severity: 'info', summary: titulo, detail: detalle, life: 4000 });
  }
}
