import { Component, input, output, computed, signal, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';

/** Definición de una columna para la tabla dinámica. */
export interface ColumnaTabla {
  field: string;
  header: string;
  type?: 'text' | 'date' | 'currency' | 'tag' | 'boolean';
  sortable?: boolean;
  filterable?: boolean;
  width?: string;
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
 * Tabla dinámica reutilizable — sb-ui.
 * Sorting, filtering, paginación, selección múltiple y acciones por fila.
 * Sin dependencias de PrimeNG.
 */
@Component({
  selector: 'app-tabla-dinamica',
  imports: [FormsModule, CurrencyPipe],
  templateUrl: './tabla-dinamica.component.html',
  styleUrls: ['./tabla-dinamica.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TablaDinamicaComponent {
  columnas = input.required<ColumnaTabla[]>();
  datos = input<unknown[]>([]);
  loading = input(false);
  rowsPerPage = input(10);
  rowsPerPageOptions = input([10, 25, 50]);
  showGlobalFilter = input(true);
  showPaginator = input(true);
  selectable = input(false);
  selectionMode = input<'single' | 'multiple'>('single');
  dataKey = input('id');
  emptyMessage = input('No se encontraron registros.');
  showActions = input(false);
  actionsHeader = input('Acciones');
  actionsWidth = input('100px');
  acciones = input<{ action: string; icon: string; tooltip: string; severity?: string }[]>([]);

  readonly filaSeleccionada = output<FilaSeleccionada>();
  readonly accionEjecutada = output<AccionFila>();

  /** Estado interno */
  globalFilter = signal('');
  sortField = signal('');
  sortOrder = signal<1 | -1>(1);
  currentPage = signal(0);
  selectedKeys = signal<Set<string>>(new Set());

  /** Datos filtrados por búsqueda global. */
  private filteredData = computed(() => {
    const filter = this.globalFilter().toLowerCase().trim();
    const data = this.datos();
    if (!filter) return data;
    const fields = this.columnas().filter(c => c.filterable !== false).map(c => c.field);
    return data.filter(row => {
      return fields.some(f => {
        const val = this.getFieldValue(row, f);
        return val != null && String(val).toLowerCase().includes(filter);
      });
    });
  });

  /** Datos filtrados + ordenados. */
  private sortedData = computed(() => {
    const data = [...this.filteredData()];
    const field = this.sortField();
    const order = this.sortOrder();
    if (!field) return data;
    return data.sort((a, b) => {
      const va = this.getFieldValue(a, field);
      const vb = this.getFieldValue(b, field);
      if (va == null && vb == null) return 0;
      if (va == null) return 1;
      if (vb == null) return -1;
      const sa = String(va);
      const sb = String(vb);
      const na = Number(va);
      const nb = Number(vb);
      if (!isNaN(na) && !isNaN(nb)) return (na - nb) * order;
      return sa.localeCompare(sb) * order;
    });
  });

  /** Datos paginados (lo que se muestra en la tabla). */
  paginatedData = computed(() => {
    const data = this.sortedData();
    if (!this.showPaginator()) return data;
    const start = this.currentPage() * this.rowsPerPage();
    return data.slice(start, start + this.rowsPerPage());
  });

  /** Total de registros filtrados. */
  totalRecords = computed(() => this.filteredData().length);

  /** Total de páginas. */
  totalPages = computed(() => Math.ceil(this.totalRecords() / this.rowsPerPage()));

  /** Array de números de página para el paginador. */
  pageNumbers = computed(() => {
    const total = this.totalPages();
    const current = this.currentPage();
    const pages: number[] = [];
    const maxVisible = 5;
    let start = Math.max(0, current - Math.floor(maxVisible / 2));
    const end = Math.min(total, start + maxVisible);
    start = Math.max(0, end - maxVisible);
    for (let i = start; i < end; i++) pages.push(i);
    return pages;
  });

  /** Total de columnas (para colspan del empty message). */
  totalCols = computed(() => {
    let cols = this.columnas().length;
    if (this.showActions()) cols++;
    if (this.selectable() && this.selectionMode() === 'multiple') cols++;
    return cols;
  });

  /** Si todos los items de la página actual están seleccionados. */
  allSelected = computed(() => {
    const data = this.paginatedData();
    if (data.length === 0) return false;
    const keys = this.selectedKeys();
    return data.every(row => keys.has(this.getRowKey(row)));
  });

  /** Ordena por una columna. */
  toggleSort(col: ColumnaTabla): void {
    if (!col.sortable) return;
    if (this.sortField() === col.field) {
      this.sortOrder.set(this.sortOrder() === 1 ? -1 : 1);
    } else {
      this.sortField.set(col.field);
      this.sortOrder.set(1);
    }
  }

  /** Texto de sort para una columna (Unicode, no depende de fuentes). */
  getSortText(field: string): string {
    if (this.sortField() !== field) return '⇅';
    return this.sortOrder() === 1 ? '↑' : '↓';
  }

  /** Cambia de página. */
  goToPage(page: number): void {
    if (page >= 0 && page < this.totalPages()) {
      this.currentPage.set(page);
    }
  }

  /** Cambia filas por página. */
  onRowsPerPageChange(value: string): void {
    this.currentPage.set(0);
    // rowsPerPage is an input, we need to handle this differently
    // For now, the parent controls rowsPerPage
  }

  /** Aplica filtro global. */
  onFilterChange(value: string): void {
    this.globalFilter.set(value);
    this.currentPage.set(0);
  }

  /** Toggle selección de una fila. */
  toggleRowSelection(row: unknown): void {
    const key = this.getRowKey(row);
    const keys = new Set(this.selectedKeys());
    if (keys.has(key)) {
      keys.delete(key);
    } else {
      keys.add(key);
    }
    this.selectedKeys.set(keys);
  }

  /** Toggle selección de todas las filas de la página. */
  toggleAllSelection(): void {
    const data = this.paginatedData();
    const keys = new Set(this.selectedKeys());
    if (this.allSelected()) {
      data.forEach(row => keys.delete(this.getRowKey(row)));
    } else {
      data.forEach(row => keys.add(this.getRowKey(row)));
    }
    this.selectedKeys.set(keys);
  }

  /** Verifica si una fila está seleccionada. */
  isSelected(row: unknown): boolean {
    return this.selectedKeys().has(this.getRowKey(row));
  }

  /** Obtiene la key de una fila. */
  getRowKey(row: unknown): string {
    return String(this.getFieldValue(row, this.dataKey()) ?? '');
  }

  /** Ejecuta una acción sobre una fila. */
  ejecutarAccion(action: string, rowData: unknown, rowIndex: number): void {
    this.accionEjecutada.emit({ action, data: rowData, index: rowIndex });
  }

  /** Obtiene el valor de un campo (soporta dot notation). */
  getFieldValue(row: unknown, field: string): unknown {
    const obj = row as Record<string, unknown>;
    return field.split('.').reduce<unknown>((acc, key) => {
      if (acc && typeof acc === 'object') return (acc as Record<string, unknown>)[key];
      return undefined;
    }, obj);
  }

  /** Obtiene la configuración de tag para un valor. */
  getTagConfig(col: ColumnaTabla, value: unknown): { label: string; severity: string } {
    if (col.tagMap && value != null) {
      return col.tagMap[String(value)] ?? { label: String(value), severity: 'default' };
    }
    return { label: String(value ?? ''), severity: 'default' };
  }

  /** Obtiene el valor numérico de un campo. */
  getNumericValue(row: unknown, field: string): number {
    const val = this.getFieldValue(row, field);
    return typeof val === 'number' ? val : 0;
  }

  /** Mapea severity a clase sb-ui-chip. */
  getChipClass(severity: string): string {
    const map: Record<string, string> = {
      success: 'sb-ui-chip--primary sb-ui-chip--soft',
      info: 'sb-ui-chip--soft',
      warn: 'sb-ui-chip--soft',
      warning: 'sb-ui-chip--soft',
      danger: 'sb-ui-chip--error sb-ui-chip--soft',
      error: 'sb-ui-chip--error sb-ui-chip--soft',
      secondary: 'sb-ui-chip--soft',
      contrast: 'sb-ui-chip--soft',
      default: 'sb-ui-chip--soft',
    };
    return map[severity] ?? 'sb-ui-chip--soft';
  }

  /** Mapea severity a clase sb-ui-badge (legacy). */
  getBadgeClass(severity: string): string {
    const map: Record<string, string> = {
      success: 'sb-ui-badge--success',
      info: 'sb-ui-badge--info',
      warn: 'sb-ui-badge--warning',
      warning: 'sb-ui-badge--warning',
      danger: 'sb-ui-badge--error',
      error: 'sb-ui-badge--error',
      secondary: 'sb-ui-badge--default',
      contrast: 'sb-ui-badge--default',
    };
    return map[severity] ?? 'sb-ui-badge--default';
  }

  /** Mapea severity a clase sb-ui-button. */
  getActionBtnClass(severity?: string): string {
    const map: Record<string, string> = {
      success: 'sb-ui-button--primary',
      info: 'sb-ui-button--secondary',
      warn: 'sb-ui-button--error',
      danger: 'sb-ui-button--error',
    };
    return map[severity ?? ''] ?? 'sb-ui-button--secondary';
  }

  /** Rango de registros mostrados. */
  rangeStart = computed(() => this.totalRecords() === 0 ? 0 : this.currentPage() * this.rowsPerPage() + 1);
  rangeEnd = computed(() => Math.min((this.currentPage() + 1) * this.rowsPerPage(), this.totalRecords()));
}
