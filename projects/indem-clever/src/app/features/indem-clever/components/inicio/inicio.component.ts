import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Panel } from 'primeng/panel';
import { UIChart } from 'primeng/chart';
import { AuthService } from '../../../../core/services/auth.service';

/** Tarjeta KPI. */
interface Kpi {
  label: string;
  valor: number;
  icono: string;
  color: string;
  tendencia: string;
  positiva: boolean;
}

/** Acceso rápido. */
interface Acceso {
  titulo: string;
  icono: string;
  ruta: string;
  color: string;
  casos: number;
}

/** Usuario top. */
interface TopUsuario {
  nombre: string;
  rol: string;
  asignados: number;
  resueltos: number;
}

/**
 * Dashboard gerencial — Clever Indem.
 * Vista ejecutiva con KPIs, gráficas de gestión, rendimiento de equipo y accesos rápidos.
 */
@Component({
  selector: 'app-inicio',
  imports: [Panel, UIChart, RouterLink],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InicioComponent {
  private readonly auth = inject(AuthService);
  readonly nombreUsuario = this.auth.nombreUsuario;

  /* ── KPIs ── */
  readonly kpis: Kpi[] = [
    { label: 'Casos Activos', valor: 124, icono: 'pi pi-folder-open', color: '#0a6e45', tendencia: '+12%', positiva: true },
    { label: 'Pendientes Hoy', valor: 18, icono: 'pi pi-clock', color: '#f59e0b', tendencia: '-3', positiva: true },
    { label: 'En Análisis', valor: 42, icono: 'pi pi-search', color: '#3b82f6', tendencia: '+5', positiva: false },
    { label: 'Pagos por Aprobar', valor: 7, icono: 'pi pi-wallet', color: '#ef4444', tendencia: '-2', positiva: true },
    { label: 'Tiempo Promedio', valor: 4.2, icono: 'pi pi-stopwatch', color: '#8b5cf6', tendencia: '-0.5d', positiva: true },
    { label: 'Tasa Resolución', valor: 87, icono: 'pi pi-check-circle', color: '#10b981', tendencia: '+3%', positiva: true },
  ];

  /* ── Gráfica: Casos por módulo (barras verticales) ── */
  readonly chartModulosData = {
    labels: ['Radicación', 'Análisis', 'UIFA', 'Médico', 'Investig.', 'Técnico', 'Pagos', 'Objeciones'],
    datasets: [
      { label: 'Activos', data: [35, 28, 6, 9, 5, 3, 7, 4], backgroundColor: '#0a6e45', borderRadius: 4, barPercentage: 0.7 },
      { label: 'Pendientes', data: [12, 10, 2, 4, 1, 1, 7, 2], backgroundColor: '#f59e0b', borderRadius: 4, barPercentage: 0.7 },
    ],
  };

  readonly chartModulosOpts = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { position: 'bottom' as const, labels: { usePointStyle: true, padding: 14, font: { size: 11 } } } },
    scales: {
      x: { grid: { display: false }, ticks: { font: { size: 10 } } },
      y: { beginAtZero: true, grid: { color: '#f1f5f9' }, ticks: { font: { size: 10 }, stepSize: 10 } },
    },
  };

  /* ── Gráfica: Distribución por estado (dona) ── */
  readonly chartEstadoData = {
    labels: ['Activos', 'Pendientes', 'En Análisis', 'Cerrados'],
    datasets: [{ data: [124, 18, 42, 253], backgroundColor: ['#0a6e45', '#f59e0b', '#3b82f6', '#e2e8f0'], borderWidth: 0 }],
  };

  readonly chartEstadoOpts = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '70%',
    plugins: { legend: { position: 'bottom' as const, labels: { usePointStyle: true, padding: 12, font: { size: 11 } } } },
  };

  /* ── Gráfica: Tendencia mensual (línea) ── */
  readonly chartTendenciaData = {
    labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
    datasets: [
      { label: 'Ingresados', data: [65, 72, 80, 68, 90, 85, 78, 92, 88, 95, 84, null], borderColor: '#0a6e45', backgroundColor: 'rgba(10,110,69,0.08)', fill: true, tension: 0.35, pointRadius: 3, pointBackgroundColor: '#0a6e45' },
      { label: 'Resueltos', data: [50, 60, 70, 65, 82, 80, 75, 88, 85, 90, 80, null], borderColor: '#3b82f6', backgroundColor: 'rgba(59,130,246,0.06)', fill: true, tension: 0.35, pointRadius: 3, pointBackgroundColor: '#3b82f6' },
    ],
  };

  readonly chartTendenciaOpts = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { position: 'bottom' as const, labels: { usePointStyle: true, padding: 14, font: { size: 11 } } } },
    scales: {
      x: { grid: { display: false }, ticks: { font: { size: 10 } } },
      y: { beginAtZero: true, grid: { color: '#f1f5f9' }, ticks: { font: { size: 10 } } },
    },
  };

  /* ── Gráfica: Rendimiento por analista (barras horizontales) ── */
  readonly chartRendimientoData = {
    labels: ['M. López', 'J. García', 'A. Martínez', 'C. Marulanda', 'C. Pérez', 'L. Rodríguez'],
    datasets: [
      { label: 'Resueltos', data: [20, 15, 18, 12, 11, 8], backgroundColor: '#0a6e45', borderRadius: 4, barPercentage: 0.6 },
      { label: 'Pendientes', data: [5, 7, 2, 6, 4, 2], backgroundColor: '#f59e0b', borderRadius: 4, barPercentage: 0.6 },
    ],
  };

  readonly chartRendimientoOpts = {
    indexAxis: 'y' as const,
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { position: 'bottom' as const, labels: { usePointStyle: true, padding: 14, font: { size: 11 } } } },
    scales: {
      x: { stacked: true, grid: { display: false }, ticks: { font: { size: 10 } } },
      y: { stacked: true, grid: { display: false }, ticks: { font: { size: 11 } } },
    },
  };

  /* ── Top gestores ── */
  readonly topUsuarios: TopUsuario[] = [
    { nombre: 'María López', rol: 'Analista', asignados: 25, resueltos: 20 },
    { nombre: 'Juan García', rol: 'Analista', asignados: 22, resueltos: 15 },
    { nombre: 'Ana Martínez', rol: 'Analista', asignados: 20, resueltos: 18 },
    { nombre: 'Cristian Marulanda', rol: 'Radicador', asignados: 18, resueltos: 12 },
    { nombre: 'Carlos Pérez', rol: 'Radicador', asignados: 15, resueltos: 11 },
  ];

  /* ── Accesos rápidos ── */
  readonly accesos: Acceso[] = [
    { titulo: 'Radicaciones', icono: 'pi pi-file-plus', ruta: '/listar-radicaciones', color: '#0a6e45', casos: 127 },
    { titulo: 'Análisis', icono: 'pi pi-search', ruta: '/listar-analisis', color: '#3b82f6', casos: 103 },
    { titulo: 'Proveedores', icono: 'pi pi-users', ruta: '/listar-uifa', color: '#8b5cf6', casos: 84 },
    { titulo: 'Pagos', icono: 'pi pi-wallet', ruta: '/listar-pagos', color: '#f59e0b', casos: 59 },
    { titulo: 'Consultar', icono: 'pi pi-chart-line', ruta: '/listar-casos', color: '#06b6d4', casos: 437 },
    { titulo: 'Mis Casos', icono: 'pi pi-briefcase', ruta: '/listar-mis-analisis', color: '#10b981', casos: 18 },
  ];

  /** Porcentaje de resolución. */
  getPct(resueltos: number, total: number): number {
    return total > 0 ? Math.round((resueltos / total) * 100) : 0;
  }
}
