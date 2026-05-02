import { Component, input, output, computed, signal, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { InputText } from 'primeng/inputtext';
import { Button } from 'primeng/button';
import { Tag } from 'primeng/tag';
import { IconField } from 'primeng/iconfield';
import { InputIcon } from 'primeng/inputicon';
import { Tooltip } from 'primeng/tooltip';
import { CurrencyPipe } from '@angular/common';

/** Definición de una columna para la tabla dinámica. */
export interface ColumnaTabla {
  /** Clave del campo en el objeto de datos. */
  field: string;
  /** Texto del encabezado de la columna. */
  header: string;
  /** Tipo de dato para renderizado especial. */
  type?: 'text' | 'date' | 'currency' | 'tag' | 'boolean';
  /** Si la columna es ordenable. */
  sortable?: boolean;
  /** Si la columna es filtrable. */
  filterable?: boolean;
  /** Ancho fijo de la columna (ej: '120px'). */
  width?: string;
  /** Mapeo de valores para columnas tipo 'tag' (valor → { label, severity }). */
  tagMap?: Record<string, { label: string; severity: string }>;
}

/** Evento emitido al seleccionar una fila. */
export interface FilaSeleccionada<T = unknown> {
  data: T;
  index: number;
}

/** Evento emitido para acciones personalizadas en una fila. */
export interface AccionFila<T = unknown> {
  action: string;
  data: T;
  index: number;
}

/**
 * Tabla dinámica reutilizable.
 *
 * Recibe columnas y datos como inputs, se adapta automáticamente
 * al número de columnas y tipos de datos de cada módulo.
 */
@Component({
  selector: 'app-tabla-dinamica',
  imports: [
    FormsModule,
    CurrencyPipe,
    TableModule,
    InputText,
    Button,
    Tag,
    IconField,
    InputIcon,
    Tooltip,
  ],
  templateUrl: './tabla-dinamica.component.html',
  styleUrl: './tabla-dinamica.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TablaDinamicaComponent {
  /** Definición de columnas. */
  columnas = input.required<ColumnaTabla[]>();

  /** Datos a mostrar en la tabla. */
  datos = input<unknown[]>([]);

  /** Si la tabla está cargando datos. */
  loading = input(false);

  /** Número de filas por página. */
  rowsPerPage = input(10);

  /** Opciones de filas por página. */
  rowsPerPageOptions = input([10, 25, 50]);

  /** Si se muestra el buscador global. */
  showGlobalFilter = input(true);

  /** Si se muestra el paginador. */
  showPaginator = input(true);

  /** Si las filas son seleccionables. */
  selectable = input(false);

  /** Modo de selección: 'single' o 'multiple'. */
  selectionMode = input<'single' | 'multiple'>('single');

  /** Campo clave para identificar filas (requerido para selección múltiple). */
  dataKey = input('id');

  /** Texto cuando no hay datos. */
  emptyMessage = input('No se encontraron registros.');

  /** Si se muestra la columna de acciones. */
  showActions = input(false);

  /** Etiqueta del encabezado de acciones. */
  actionsHeader = input('Acciones');

  /** Ancho de la columna de acciones. */
  actionsWidth = input('100px');

  /** Acciones disponibles por fila. */
  acciones = input<{ action: string; icon: string; tooltip: string; severity?: string }[]>([]);

  /** Emite cuando se selecciona una fila. */
  readonly filaSeleccionada = output<FilaSeleccionada>();

  /** Emite cuando se ejecuta una acción en una fila. */
  readonly accionEjecutada = output<AccionFila>();

  /** Campos ordenables para el componente. */
  camposOrdenables = computed(() =>
    this.columnas().filter(c => c.sortable).map(c => c.field)
  );

  /** Campos filtrables para el buscador global. */
  camposFiltrables = computed(() =>
    this.columnas().filter(c => c.filterable !== false).map(c => c.field)
  );

  /** Valor del filtro global. */
  globalFilterValue = signal('');

  /** Fila(s) seleccionada(s). */
  selection = signal<unknown>(null);

  /** Aplica el filtro global sobre la tabla. */
  onGlobalFilter(value: string, table: { filterGlobal: (value: string, matchMode: string) => void }): void {
    this.globalFilterValue.set(value);
    table.filterGlobal(value, 'contains');
  }

  /** Maneja la selección de una fila. */
  onRowSelect(event: unknown): void {
    const e = event as { data: unknown };
    this.filaSeleccionada.emit({ data: e.data, index: 0 });
  }

  /** Ejecuta una acción sobre una fila. */
  ejecutarAccion(action: string, rowData: unknown, rowIndex: number): void {
    this.accionEjecutada.emit({ action, data: rowData, index: rowIndex });
  }

  /** Obtiene el valor de un campo del objeto de datos. */
  getFieldValue(row: unknown, field: string): unknown {
    const obj = row as Record<string, unknown>;
    return field.split('.').reduce<unknown>((acc, key) => {
      if (acc && typeof acc === 'object') {
        return (acc as Record<string, unknown>)[key];
      }
      return undefined;
    }, obj);
  }

  /** Obtiene la configuración de tag para un valor. */
  getTagConfig(col: ColumnaTabla, value: unknown): { label: string; severity: string } {
    if (col.tagMap && value != null) {
      return col.tagMap[String(value)] ?? { label: String(value), severity: 'info' };
    }
    return { label: String(value ?? ''), severity: 'info' };
  }

  /** Obtiene el valor numérico de un campo para el pipe currency. */
  getNumericValue(row: unknown, field: string): number {
    const val = this.getFieldValue(row, field);
    return typeof val === 'number' ? val : 0;
  }

  /** Obtiene el severity tipado para PrimeNG components. */
  getSeverity(value: string | undefined): 'success' | 'info' | 'warn' | 'danger' | 'secondary' | 'contrast' {
    const valid = ['success', 'info', 'warn', 'danger', 'secondary', 'contrast'] as const;
    type Severity = typeof valid[number];
    return valid.includes(value as Severity) ? (value as Severity) : 'info';
  }
}
