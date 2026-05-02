import { Component, input, signal, ChangeDetectionStrategy } from '@angular/core';
import { Fieldset } from 'primeng/fieldset';
import { Accordion, AccordionPanel, AccordionHeader, AccordionContent } from 'primeng/accordion';

/**
 * Gestión individual dentro de una etapa.
 * @property titulo - Título del evento (ej: "CASO ASIGNADO A RADICADOR - RENTAS").
 * @property responsable - Email o nombre del responsable.
 * @property fecha - Fecha de la gestión.
 * @property observacion - Observación o detalle de la gestión.
 */
export interface GestionEtapa {
  titulo: string;
  responsable: string;
  fecha: string;
  observacion: string;
}

/**
 * Etapa de la línea de tiempo.
 * @property label - Nombre visible de la etapa (RADICADO, DEFINICIÓN, etc.).
 * @property completada - Si la etapa ya fue completada.
 * @property activa - Si es la etapa actual en curso.
 * @property gestiones - Array de gestiones/logs dentro de esta etapa.
 */
export interface EtapaLineaTiempo {
  label: string;
  completada?: boolean;
  activa?: boolean;
  gestiones?: GestionEtapa[];
}

/**
 * Sección: Línea de Tiempo / Historial del Caso.
 * Muestra un stepper horizontal con 5 etapas numeradas
 * y un acordeón debajo con las gestiones de cada etapa.
 */
@Component({
  selector: 'app-seccion-linea-tiempo',
  imports: [Fieldset, Accordion, AccordionPanel, AccordionHeader, AccordionContent],
  templateUrl: './seccion-linea-tiempo.component.html',
  styleUrl: './seccion-linea-tiempo.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SeccionLineaTiempoComponent {
  legend = input('Historial del Caso');
  toggleable = input(true);
  etapas = input<EtapaLineaTiempo[]>([]);

  /** Controla qué panel del acordeón está abierto. null = todos cerrados. */
  activeValue = signal<string | null>(null);
}
