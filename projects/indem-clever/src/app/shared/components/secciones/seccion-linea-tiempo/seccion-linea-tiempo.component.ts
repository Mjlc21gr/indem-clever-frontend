import { Component, input, signal, ChangeDetectionStrategy } from '@angular/core';

/** Gestión individual dentro de una etapa. */
export interface GestionEtapa {
  titulo: string;
  responsable: string;
  fecha: string;
  observacion: string;
}

/** Etapa de la línea de tiempo. */
export interface EtapaLineaTiempo {
  label: string;
  completada?: boolean;
  activa?: boolean;
  gestiones?: GestionEtapa[];
}

/**
 * Sección: Línea de Tiempo / Historial del Caso — sb-ui.
 * Stepper horizontal + acordeón con gestiones por etapa.
 */
@Component({
  selector: 'app-seccion-linea-tiempo',
  templateUrl: './seccion-linea-tiempo.component.html',
  styleUrls: ['./seccion-linea-tiempo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SeccionLineaTiempoComponent {
  legend = input('Historial del Caso');
  toggleable = input(true);
  etapas = input<EtapaLineaTiempo[]>([]);

  collapsed = false;
  activePanel = signal<number | null>(null);

  /** Toggle la sección principal. */
  toggle(): void { if (this.toggleable()) this.collapsed = !this.collapsed; }

  /** Toggle un panel del acordeón. */
  togglePanel(index: number): void {
    this.activePanel.set(this.activePanel() === index ? null : index);
  }
}
